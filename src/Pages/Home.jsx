import React, { useState } from 'react'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {

    const [cartItems, setCartItems] = useState(0)

  return (
    <div>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Slider/>
        <Categories/>
        <Products cartItems={cartItems} setCartItems={setCartItems} />
        <Footer/>
    </div>
  )
}

export default Home