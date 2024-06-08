// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a That Healthy Flow!" />
    </div>
  );
};

export default App;
