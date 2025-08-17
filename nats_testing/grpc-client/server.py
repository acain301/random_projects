import asyncio
from concurrent import futures

import grpc
import proto.grpc_pb2 as pb
import proto.grpc_pb2_grpc as pb_grpc
from nats.aio.client import Client as NATS

class Subscriber(pb_grpc.SubscriberServicer):
    async def Subscribe(self, request, context):
        nc = NATS()
        await nc.connect("nats://nats-server:4222")

        queue = asyncio.Queue()

        async def message_handler(msg):
            await queue.put(msg.data.decode())

        await nc.subscribe(request.topic, cb=message_handler)

        while True:
            msg = await queue.get()
            yield pb.TopicMessage(data=msg)

async def serve():
    server = grpc.aio.server()
    pb_grpc.add_SubscriberServicer_to_server(Subscriber(), server)
    server.add_insecure_port('[::]:50051')
    await server.start()
    await server.wait_for_termination()

if __name__ == '__main__':
    asyncio.run(serve())

