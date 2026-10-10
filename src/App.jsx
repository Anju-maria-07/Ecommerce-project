import {HomePage} from './pages/HomePage';
import {Routes, Route} from 'react-router';
import {CheckoutPage} from './pages/CheckoutPage';
import {OrdersPage} from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage';

import './App.css'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Checkout" element={<CheckoutPage />} />
      <Route path="/Orders" element={<OrdersPage />} />
      <Route path="/Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App
