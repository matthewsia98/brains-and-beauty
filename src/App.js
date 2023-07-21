import { version } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import {HashRouter, Routes, Route } from 'react-router-dom';
import FaceProducts from './FaceProducts';
import BodyProducts from './BodyProducts';
import SunProducts from './SunProducts';
import HairProducts from './HairProducts';
import Checkout from './Checkout';
import { CartProvider } from './CartContext';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/product/:product_id" element={<ProductPage/>}/>
      <Route path="/face" element={<FaceProducts/>}/>
      <Route path="/body" element={<BodyProducts/>}/>
      <Route path="/suncare" element={<SunProducts/>}/>
      <Route path="/hair" element={<HairProducts/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;
