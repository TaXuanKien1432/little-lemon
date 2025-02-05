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
import { createContext, useState } from 'react'
import Logout from './pages/Logout.jsx'
import All from './components/All.jsx'
import Breakfast from './components/Breakfast.jsx'
import Lunch from './components/Lunch.jsx'
import Dinner from './components/Dinner.jsx'
import Dessert from './components/Dessert.jsx'
import Drink from './components/Drink.jsx'
import Checkout from './pages/Checkout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export const LogInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity*item.price, 0).toFixed(2);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? {...item, quantity: item.quantity + 1,} : item));
      }
      return [...prevCart, {...product, quantity: 1,}]
    })
  }

  return (
    <>
      <LogInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <ScrollToTop />
        <Nav totalItems={totalItems}></Nav>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} totalItems={totalItems} totalPrice={totalPrice} />}></Route>
          <Route path="/order-online" element={<OrderOnline addToCart={addToCart}/>}>
            <Route index element={<All />}></Route>
            <Route path="breakfast" element={<Breakfast />}></Route>
            <Route path="lunch" element={<Lunch />}></Route>
            <Route path="dinner" element={<Dinner />}></Route>
            <Route path="dessert" element={<Dessert />}></Route>
            <Route path="drink" element={<Drink />}></Route>
          </Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
          {isLoggedIn ? <Route path="/logout" element={<Logout />}></Route> : <Route path="/login" element={<Login/>}></Route>}
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} totalItems={totalItems} totalPrice={totalPrice}/>}></Route>
        </Routes>
        <Footer></Footer>
      </LogInContext.Provider>
    </>
  )
}

export default App
