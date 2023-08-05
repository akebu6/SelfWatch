import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-bootstrap/NavLink"

export function Header() {
  return (
    <Container className="bg-primary d-flex justify-content-between width-auto h-25">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <h1>SelfWatch</h1>
      <p>profile</p>
    </Container>
  );
}
