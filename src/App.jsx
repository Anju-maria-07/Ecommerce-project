import {HomePage} from './pages/Home/HomePage';
import {Routes, Route} from 'react-router';
import {CheckoutPage} from './pages/Checkout/CheckoutPage';
import {OrdersPage} from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css'

function App() {
const [cart,setCart] =useState([]);
useEffect(()=>{
 axios.get('/api/cart-items?expand=product')
 .then((response)=>{
  setCart(response.data)
 }) 
},[])

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="/Checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/Orders" element={<OrdersPage cart={cart} />} />
      <Route path="/Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App
