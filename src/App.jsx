import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import OrderOnline from './pages/OrderOnline.jsx'
import Reservations from './pages/Reservations.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order-online" element={<OrderOnline/>}></Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
