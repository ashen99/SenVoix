import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { motion as m } from "framer-motion";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="overflow-hidden navbar-div">
        <m.Container
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Navbar.Brand href="/">SEN-VOIX</Navbar.Brand>
          <Nav className="right-aligned">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </m.Container>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
