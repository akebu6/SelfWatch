import React, { useState } from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Container } from "react-bootstrap/Container";
import { Header } from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { Body } from "./components/Body";
import Item from "./pages/Item";
import SelfCareTasks from "./pages/SelfCareTasks";
import Container from "react-bootstrap/esm/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <div className="bg-secondary max-height">
          <Header className="font-trim" />
          <h2 className="m-5">Variable Name</h2>
          <Body />
        </div>
      </Container>
    );
  }
}

export default App;
