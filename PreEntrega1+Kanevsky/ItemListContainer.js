// src/components/ItemListContainer.js
import React from 'react';
import './ItemListContainer.css'; // Crea un archivo CSS para estilos personalizados si es necesario

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
