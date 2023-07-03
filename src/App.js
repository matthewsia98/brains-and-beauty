import { version } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import ProductPage from './ProductPage';
import {HashRouter, Routes, Route } from 'react-router-dom';
import FaceProducts from './FaceProducts';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/product/:product_id" element={<ProductPage/>}/>
      <Route path="/face" element={<FaceProducts/>}/>
    </Routes>
    </div>
  );
}

export default App;
