import React, { useState } from "react";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Container } from "react-bootstrap/Container";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-secondary max-height">
      <Header className="font-trim" />
      <Body />
    </div>
  );
}

export default App;
