import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from nats.aio.client import Client as NATS
from typing import List

app = FastAPI()
nats_client = NATS()

connected_websockets: List[WebSocket] = []

@app.on_event("startup")
async def startup_event():
    await nats_client.connect("nats://localhost:4222")
    print("Connected to NATS")

    async def message_handler(msg):
        data = msg.data.decode()
        print(f"Received on [{msg.subject}]: {data}")
        # Send to all connected WebSocket clients
        disconnected = []
        for ws in connected_websockets:
            try:
                await ws.send_text(data)
            except WebSocketDisconnect:
                disconnected.append(ws)
        for ws in disconnected:
            connected_websockets.remove(ws)

    # Subscribe to subject
    await nats_client.subscribe("test.subject", cb=message_handler)

@app.on_event("shutdown")
async def shutdown_event():
    await nats_client.drain()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_websockets.append(websocket)
    try:
        while True:
            await websocket.receive_text()  # You can handle messages from client here if needed
    except WebSocketDisconnect:
        connected_websockets.remove(websocket)

