import asyncio
import grpc
from fastapi import FastAPI
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

# gRPC generated modules (from item.proto)
import item_pb2
import item_pb2_grpc

app = FastAPI()

# MongoDB setup
MONGO_URI = "mongodb://admin:adminpass@localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client["my_database"]


# ------------------------
# Utility & Models
# ------------------------

def serialize_item(item):
    item["_id"] = str(item["_id"])
    return item

class Item(BaseModel):
    name: str
    description: str


# ------------------------
# FastAPI Routes
# ------------------------

@app.post("/items", tags=["Single Inserts"])
async def create_item(item: Item):
    result = await db["items"].insert_one(item.model_dump())
    return {"id": str(result.inserted_id), "message": "Item added successfully"}

@app.get("/items", tags=["Single Inserts"])
async def get_items():
    items = await db["items"].find().to_list(100)
    return [serialize_item(item) for item in items]

@app.post("/concurrent_items", tags=["Concurrent Inserts"])
async def concurrent_create_item(item: Item):
    item_data = item.model_dump()
    insert_tasks = [
        db["items"].insert_one(item_data),
        db["items_log"].insert_one({"action": "create", "item": item_data}),
        db["items_backup"].insert_one(item_data),
    ]
    results = await asyncio.gather(*insert_tasks)
    return {"id": str(results[0].inserted_id), "message": "Inserted into 3 collections"}


# ------------------------
# gRPC Service Implementation
# ------------------------

class ItemService(item_pb2_grpc.ItemServiceServicer):
    async def CreateItem(self, request, context):
        doc = {"name": request.name, "description": request.description}
        result = await db["items"].insert_one(doc)
        return item_pb2.ItemResponse(id=str(result.inserted_id), message="Item added successfully")

    async def GetItems(self, request, context):
        items = await db["items"].find().to_list(100)
        grpc_items = [
            item_pb2.Item(
                id=str(item["_id"]),
                name=item["name"],
                description=item["description"]
            ) for item in items
        ]
        return item_pb2.ItemList(items=grpc_items)


# ------------------------
# Start gRPC Server at FastAPI Startup
# ------------------------

@app.on_event("startup")
async def start_grpc_server():
    server = grpc.aio.server()
    item_pb2_grpc.add_ItemServiceServicer_to_server(ItemService(), server)
    server.add_insecure_port("[::]:50051")
    asyncio.create_task(server.start())
    print("✅ gRPC server started on port 50051")

