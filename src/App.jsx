
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { useState } from 'react'
import Order from './components/Order'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/productSlice'
import { mockData } from './assets/mockData'

function App() {

  const [order, setOrder] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])

  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Checkout' element={<Checkout setOrder={setOrder} />}></Route>
          <Route path='/order-confirmation' element={<Order order={order} />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/profile' element={<Profile />}></Route>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
