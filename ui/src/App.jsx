import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/products/${id}`, {
        method: "DELETE",
    })
    window.location.reload()
}
  const handleSubmit = async (e) => {
      e.preventDefault()
      const newProduct = { name, price: parseFloat(price), quantity: parseInt(quantity) }
      await fetch("http://127.0.0.1:8000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct)
      })
      window.location.reload()
  }
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error))
  }, [])
  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory Manager</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
          {product.name} - ${product.price} ({product.quantity} in stock)
          <button 
              onClick={() => handleDelete(product.id)} 
              style={{ marginLeft: "10px", color: "red" }}
          >
              Delete
          </button>
        </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Quantity" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
    </div>
    
  )
}
export default App