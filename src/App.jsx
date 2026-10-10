import {HomePage} from './pages/HomePage';
import {Routes, Route} from 'react-router';

import './App.css'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Checkout" element={<div>test checkout page</div>} />
    </Routes>
  );
}

export default App
