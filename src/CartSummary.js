import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
const CartSummary = ({ tax_rate }) => {
  const { cartItems } = useContext(CartContext);

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };
  const calculateSubtotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const calculateTaxes = () => {
    return (12 + calculateSubtotalPrice()) * tax_rate;
  };

  const calculateTotalPrice = () => {
    return calculateSubtotalPrice() + calculateTaxes() + 12;
  };

  return (
    <div className="checkout-page">
      <h3 className="text-center">Cart Summary</h3>
      <div className="checkout-summary mt-4 text-end">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>
              {item.name} x {item.quantity} - $
              {calculateItemTotal(item.price, item.quantity)}
            </p>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h5>Subtotal: ${calculateSubtotalPrice().toFixed(2)}</h5>
        <h5>Shipping: $12.00</h5>
        <h5>
          Taxes:{" "}
          {tax_rate === 0
            ? "Determined at next step"
            : `$${calculateTaxes().toFixed(2)}`}
        </h5>
        <h5>Total: ${calculateTotalPrice().toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default CartSummary;
