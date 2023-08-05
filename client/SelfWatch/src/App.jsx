import React, { useState } from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Container } from "react-bootstrap/Container";
import { Header } from "./components/Header";
import { Body } from "./pages/Body";
import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div id="detail">
        <div className="bg-secondary max-height">
          <Header className="font-trim" />
          <Outlet />
          <Body />
        </div>
      </div>
      </>
    );
  }
}

export default App;
