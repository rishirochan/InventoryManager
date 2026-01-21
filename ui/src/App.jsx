import { useState, useEffect } from 'react'
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [id, setId] = useState(null)
  const handleEdit = (product) => {
    setId(product.id) // Switch to Edit Mode
    setName(product.name)
    setPrice(product.price)
    setQuantity(product.quantity)
  }
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    })
    setProducts(products.filter((product) => product.id !== id))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = { name, price: parseFloat(price), quantity: parseInt(quantity) }
    if (id) {
      // Update Mode (PUT)
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })
      const updatedProduct = await response.json()
      setProducts(products.map((p) => (p.id === id ? updatedProduct : p)))
    } else {
      // Create Mode (POST)
      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      })
      const data = await response.json()
      setProducts([...products, data])
    }
    setId(null)
    setName("")
    setPrice("")
    setQuantity("")
  }
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error))
  }, [])
  return (
    <div className="app-container">
      <div className="glass-card">
        <h1 className="title">Inventory <span className="highlight">Manager</span></h1>

        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-details">${product.price} • {product.quantity} left</span>
              </div>
              <div className="action-buttons">
                <button
                  onClick={() => handleEdit(product)}
                  className="btn btn-secondary">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="form-title">{id ? "Edit Product" : "Add New Product"}</h3>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="input-group">
            <input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="input-row">
            <input placeholder="Price" type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required />
            <input placeholder="Qty" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {id ? "Update Product" : "Add to Inventory"}
          </button>

          {id && (
            <button type="button" onClick={() => {
              setId(null); setName(""); setPrice(""); setQuantity("");
            }} className="btn btn-text btn-block">
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
export default App