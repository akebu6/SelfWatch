import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
// import { Container } from "react-bootstrap/Container";
import { Header } from "./components/Header";
import { Item } from "./pages/Item";
import { Route, Routes } from "react-router-dom";
import { Component } from "react";
import FirstEntry from "./pages/FirstEntry";
import SelfCareTasks from "./pages/SelfCareTasks";
import { Preferences } from "./pages/Preferences";
import { NewItem } from "./pages/NewItem";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <div className="d-flex flex-column align-items-center">
            <h2 className="m-5">Page Item</h2>
            <Card className="bg-primary border border-trim-rounded rounded-5 border-5 w-100 align-items-center">
              <Routes>
                <Route path="/" element={<FirstEntry />} />
                <Route path="/new_item" element={<NewItem />} />
                <Route path="/item" element={<Item />} />
                <Route path="/selfcaretasks" element={<SelfCareTasks />} />
                <Route path="/preferences" element={<Preferences />} />
              </Routes>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
