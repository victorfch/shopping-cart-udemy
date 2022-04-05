import { useState } from 'react'
import Layout from './components/Layout'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'

function App() {
  const initialProducts = [
    {name: "tomate", price: 1500, img: "./assets/tomate.jpg"},
    {name: "arbejas", price: 2500, img: "./assets/arbejas.jpg"},
    {name: "lechuga", price: 500, img: "./assets/lechuga.jpg"}
  ]

  const [products, setProducts] = useState(initialProducts)

  const handleAddToCart = (product) => {
    console.log(product)
    console.log("add to shopping cart")
  }

  return (
    <div>
      <Navbar />
      <Layout>  
        <h1>Products</h1>
        <hr />
        <ProductList
          products={products}
          addToCart={handleAddToCart} />
      </Layout>
    </div>
  )
}

export default App
