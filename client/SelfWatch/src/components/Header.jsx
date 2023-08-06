import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export function Header() {
  return (
    <Container className="bg-primary d-flex width-100 h-40">
      <Link to="/selfcaretasks">
        <img id="logo" />
      </Link>
      <h1>SelfWatch</h1>
    </Container>
  );
}
