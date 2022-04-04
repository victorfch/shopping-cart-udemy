import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  const initialProducts = [
    {name: "tomate", price: 1500, img: "./assets/tomate.jpg"},
    {name: "arbejas", price: 2500, img: "./assets/arbejas.jpg"},
    {name: "lechuga", price: 500, img: "./assets/lechuga.jpg"}
  ]

  const [products, setProducts] = useState(initialProducts)


  return (
    <div>
      <h1>Products</h1>
      <hr />
      <ProductList
        products={products}
        addToCart={() => console.log("add to shopping cart")}/>
    </div>
  )
}

export default App
