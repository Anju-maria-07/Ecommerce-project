import { HomePage } from './pages/Home/HomePage';
import { Routes, Route } from 'react-router';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/Order/OrdersPage'
import { TrackingPage } from './pages/TrackingPage';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')

    setCart(response.data)
  }
  useEffect(() => {

    loadCart();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/Checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/Orders" element={<OrdersPage cart={cart} />} />
      <Route path="/Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App
