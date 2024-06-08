// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">That Healthy Flow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home.html">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="suplementos.html">Suplementos</NavDropdown.Item>
            <NavDropdown.Item href="vitaminas.html">Vitaminas</NavDropdown.Item>
            <NavDropdown.Item href="alimentos-organicos.html">Alimentos Orgánicos</NavDropdown.Item>
            <NavDropdown.Item href="equipos-de-fitness.html">Equipos de Fitness</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="about.html">Nosotros</Nav.Link>
          <Nav.Link href="contact.html">Contacto</Nav.Link>
          <Nav.Link href="cart.html">Carrito</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
