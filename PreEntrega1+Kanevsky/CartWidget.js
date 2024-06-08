// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; // Crea un archivo CSS para estilos personalizados si es necesario

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-notification">3</span>
    </div>
  );
};

export default CartWidget;
