FROM python:3.11

WORKDIR /app

COPY server.py .

RUN pip install websockets nats-py

CMD ["python", "server.py"]
