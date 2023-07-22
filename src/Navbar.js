import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import './index.css';
import { useState, useEffect, useContext} from 'react';
import { CartContext } from "./CartContext";
import { FaTimes } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";



const Navbar = () => {

    const [showCartPopup, setShowCartPopup] = useState(false);
    const { cartItems, setCartItems } = useContext(CartContext);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const toggleCartPopup = () => {
      setShowCartPopup(!showCartPopup);
    };
  
    const [cart, setCart] = useState([]);


    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
    }, []);
  
    const handleDeleteCartItem = (itemId) => {
      const existingCartItem = cartItems.find((item) => item.id === itemId);
  
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          );
          setCartItems(updatedCartItems);
          localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        } else {
          const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
          setCartItems(updatedCartItems);
          localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        }
      }
    };
    
  return (  
    <div>
      <nav className="navbar navbar-expand-md bg-pink">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-heading" to="/">Brains&Beauty</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/face">Face Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/body">Body Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/suncare">Sun Care</Link>
              </li>
              <li className="nav-item">
                <Link to="/hair">Hair Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/support">Support</Link>
              </li>
              <li className="nav-item me-3 ms-3" onClick={toggleCartPopup}>
                <div>
                  <FaShoppingCart />
                  {cartItems.length > 0 && <span className="cart-item-count">{totalQuantity}</span>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showCartPopup && (
      <div className="cart-popup">
        <button className="close-button" onClick={toggleCartPopup}>
          <FaTimes />
        </button>
        <div className="cart-items">
          <h4 className="mb-3 mt-2">Items</h4>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <p>{item.name} x {item.quantity}</p>
              </div>
              <button className="delete-button" onClick={() => handleDeleteCartItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <p>Total Quantity: {totalQuantity}</p>
          <div className="d-flex justify-content-center">
            <Link to="/checkout" className="checkout-button">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    )}





      
    </div>
  );
}

export default Navbar;
