import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavigationBar() {
  return (
    <div>
      <Navbar key="md" bg="warning" fixed="top" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white ">
            <h3>Gg Giveaway</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Gg Giveaway
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                <Nav.Link as={Link} to="/">
                  <h4 className="text-muted fw-lighter">Home</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/shop">
                  <h4 className="text-muted fw-lighter">Shop</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  <h4 className="text-muted fw-lighter">About</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  <h4 className="text-muted fw-lighter">Contact us</h4>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
