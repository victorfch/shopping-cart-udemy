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
  const [shoppingCart, setShoppingCart] = useState([])

  const handleAddToCart = (product) => {
    const productExist = shoppingCart.find(ele => ele.name === product.name)

    if (productExist) {
      shoppingCart.forEach(cart => {
        if (cart.name === product.name) {
          cart.quantity++
        }
      })
      setShoppingCart([...shoppingCart])
      return
    }

    setShoppingCart(oldValue => [
      ...oldValue,
      {...product, quantity: 1}
    ])


  }

  return (
    <div>
      <Navbar shoppingCart={shoppingCart} />
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
