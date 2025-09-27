from fastapi import FastAPI, HTTPException

tags_metadata = [
    {"name": "Users -> GET", "description": "GET endpoints for users"},
    {"name": "Users -> PUT", "description": "PUT endpoints for users"},
    {"name": "Users -> DELETE", "description": "DELETE endpoints for users"},
    
    {"name": "Items -> GET", "description": "GET endpoints for items"},
    {"name": "Items -> PUT", "description": "PUT endpoints for items"},
    {"name": "Items -> DELETE", "description": "DELETE endpoints for items"},
    
    {"name": "Orders -> GET", "description": "GET endpoints for orders"},
    {"name": "Orders -> PUT", "description": "PUT endpoints for orders"},
    {"name": "Orders -> DELETE", "description": "DELETE endpoints for orders"},
]

app = FastAPI(
    title="Categorized API with Tags",
    description="A FastAPI app with multiple endpoints per resource group.",
    version="1.0.0",
    # openapi_tags=tags_metadata,
    swagger_ui_parameters={"docExpansion": "none"}  
)

# === USERS ===
@app.get("/users/{user_id}", tags=["Users -> GET"])
def get_user(user_id: int):
    return {"user_id": user_id, "name": "John Doe"}

@app.get("/users/by-username/{username}", tags=["Users -> GET"])
def get_user_by_username(username: str):
    return {"username": username, "user_id": 123}

@app.put("/users/{user_id}", tags=["Users -> PUT"])
def update_user_name(user_id: int, name: str):
    return {"user_id": user_id, "updated_name": name}

@app.put("/users/{user_id}/email", tags=["Users -> PUT"])
def update_user_email(user_id: int, email: str):
    return {"user_id": user_id, "updated_email": email}

@app.delete("/users/{user_id}", tags=["Users -> DELETE"])
def delete_user(user_id: int):
    return {"message": f"User {user_id} deleted"}

# === ITEMS ===
@app.get("/items/{item_id}", tags=["Items -> GET"])
def get_item(item_id: int):
    return {"item_id": item_id, "name": "Widget"}

@app.get("/items/by-name/{name}", tags=["Items -> GET"])
def get_item_by_name(name: str):
    return {"name": name, "item_id": 456}

@app.put("/items/{item_id}", tags=["Items -> PUT"])
def update_item_name(item_id: int, name: str):
    return {"item_id": item_id, "updated_name": name}

@app.put("/items/{item_id}/price", tags=["Items -> PUT"])
def update_item_price(item_id: int, price: float):
    return {"item_id": item_id, "updated_price": price}

@app.delete("/items/{item_id}", tags=["Items -> DELETE"])
def delete_item(item_id: int):
    return {"message": f"Item {item_id} deleted"}

# === ORDERS ===
@app.get("/orders/{order_id}", tags=["Orders -> GET"])
def get_order(order_id: int):
    return {"order_id": order_id, "status": "shipped"}

@app.get("/orders/by-customer/{customer_id}", tags=["Orders -> GET"])
def get_orders_by_customer(customer_id: int):
    return {"customer_id": customer_id, "orders": [1001, 1002]}

@app.put("/orders/{order_id}", tags=["Orders -> PUT"])
def update_order_status(order_id: int, status: str):
    return {"order_id": order_id, "updated_status": status}

@app.put("/orders/{order_id}/address", tags=["Orders -> PUT"])
def update_order_address(order_id: int, address: str):
    return {"order_id": order_id, "updated_address": address}

@app.delete("/orders/{order_id}", tags=["Orders -> DELETE"])
def delete_order(order_id: int):
    return {"message": f"Order {order_id} deleted"}
