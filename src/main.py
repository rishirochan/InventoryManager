from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

class Product(BaseModel):
    id: int
    name: str
    description: str | None = None
    price: float = Field(..., gt=0)
    quantity: int = Field(..., ge=0)

DATABASE = []

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Inventory Manager"}

@app.get("/products")
def get_products():
    return DATABASE

@app.post("/products")
def post_products(product: Product):
    DATABASE.append(product)
    return product

@app.get("/products/{product_id}")
def get_product(product_id: int):
    for product in DATABASE:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@app.put("/products/{product_id}")
def update_product(product_id: int, updated_product: Product):
    for i, product in enumerate(DATABASE):
        if product.id == product_id:
            DATABASE[i] = updated_product
            return updated_product
    raise HTTPException(status_code=404, detail="Product not found")

@app.delete("/products/{product_id}")
def delete_product(product_id: int):
    for i, product in enumerate(DATABASE):
        if product.id == product_id:
            DATABASE.pop(i)
            return {"message": "Product deleted"}
    raise HTTPException(status_code=404, detail="Product not found")
    