import asyncio
from fastapi import FastAPI
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

app = FastAPI() 

MONGO_URI = "mongodb://admin:adminpass@localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client["my_database"]

def serialize_item(item):
    item["_id"] = str(item["_id"])
    return item

class Item(BaseModel):
    name: str
    description: str

@app.post("/items", tags=["Single Inserts"])
async def create_item(item: Item):
    # Insert the item into MongoDB
    result = await db["items"].insert_one(item.model_dump())
 
    # Return the inserted ID
    return {"id": str(result.inserted_id), "message": "Item added successfully"}

@app.get("/items", tags=["Single Inserts"])
async def get_items():
    items = await db["items"].find().to_list(100)
    return [serialize_item(item) for item in items]

@app.post("/concurrent_items", tags=["Concurrent Inserts"])
async def concurrent_create_item(item: Item):
    item_data = item.model_dump()

    # Concurrently insert into 3 collections
    insert_tasks = [
        db["items"].insert_one(item_data),
        db["items_log"].insert_one({"action": "create", "item": item_data}),
        db["items_backup"].insert_one(item_data),
    ]

    results = await asyncio.gather(*insert_tasks)

    # Return the ID of the main insert (first one)
    inserted_id = results[0].inserted_id
    return {"id": str(inserted_id), "message": "Inserted into 3 collections"}
