FROM python:3.11-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Rust
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Create app directory
WORKDIR /app

# Copy Rust code and build it
COPY rust-notifier /app/rust-notifier
RUN cd rust-notifier && cargo build --release

# Copy Python script
COPY main.py .

# Install Python dependencies
RUN pip install nats-py

CMD ["python", "main.py"]

