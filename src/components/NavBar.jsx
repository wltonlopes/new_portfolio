import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className='container-fluid'>
        <Navbar.Brand href="#home">Welto Lopes</Navbar.Brand>
        <Nav.Link href="#projetos">Projetos</Nav.Link>
        <Nav.Link href="#sobremim">Sobre mim</Nav.Link>
        <Nav.Link href="#stacks">Minhas Stacks</Nav.Link>     
        <Nav.Link href="#contato">Entre em Contato</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </>
  );
}