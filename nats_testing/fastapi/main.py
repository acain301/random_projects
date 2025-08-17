from fastapi import FastAPI, WebSocket
import grpc
import proto.grpc_pb2 as pb
import proto.grpc_pb2_grpc as pb_grpc
import asyncio

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        topic = await websocket.receive_text()
        asyncio.create_task(handle_subscription(topic, websocket))

async def handle_subscription(topic: str, websocket: WebSocket):
    async with grpc.aio.insecure_channel('grpc-client:50051') as channel:
        stub = pb_grpc.SubscriberStub(channel)
        request = pb.TopicRequest(topic=topic)
        async for message in stub.Subscribe(request):
            await websocket.send_text(message.data)

