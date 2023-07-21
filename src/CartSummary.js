import { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
const CartSummary = () => {
    const { cartItems } = useContext(CartContext);

    const calculateItemTotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };
  
    return (
        <div className="checkout-page">
          <h3 className='text-center'>Cart Summary</h3>
          <div className="checkout-summary mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <p>
                  {item.name} x {item.quantity} - ${calculateItemTotal(item.price, item.quantity)}
                </p>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <h5>Subtotal: ${calculateTotalPrice()}</h5>
            <h5>Taxes: TBD</h5>
            <h5>Total: ${calculateTotalPrice()}</h5>
          </div>
        </div>
      );
}
 
export default CartSummary;