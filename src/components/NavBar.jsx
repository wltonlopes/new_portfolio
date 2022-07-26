import React from 'react';
import { Nav, Navbar,Container } from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welto Lopes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#sobremim">Sobre mim</Nav.Link>
              <Nav.Link href="#stacks">Minhas Stacks</Nav.Link>
              <Nav.Link href="#contato">Entre em Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}