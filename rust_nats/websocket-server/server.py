import asyncio
import json
import websockets
from nats.aio.client import Client as NATS

clients = set()

async def notify_clients(message):
    for client in clients:
        try:
            await client.send(message)
        except:
            clients.remove(client)

async def nats_listener():
    nc = NATS()
    await nc.connect(servers=["nats://nats:4222"])

    async def message_handler(msg):
        data = msg.data.decode()
        print(f"Received from NATS: {data}")
        await notify_clients(data)

    await nc.subscribe("data.notifications", cb=message_handler)

async def websocket_handler(websocket):
    clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        clients.remove(websocket)

async def main():
    # Start the websocket server as a context manager
    async with websockets.serve(websocket_handler, "0.0.0.0", 8000):
        await asyncio.gather(# Start your NATS listener concurrently
        nats_listener(),  # assuming this is an async function that runs forever
        asyncio.Future(),
        )

if __name__ == '__main__':
    asyncio.run(main())
