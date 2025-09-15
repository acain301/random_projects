from fastapi import FastAPI

app = FastAPI()

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI!"}

@app.get("/")
def root():
    return {"message": "FastAPI is working!"}

@app.get("/api")
def api_root():
    return {"message": "API root is working!"}
