import "bootstrap/dist/css/bootstrap.min.css";
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

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <Card className="bg-primary m-5 border border-trim-rounded rounded-5 border-5">
            <Routes>
              <Route path="/" element={<FirstEntry />} />
              <Route path="/new_item" element={<NewItem />} />
              <Route path="/item" element={<Item />} />
              <Route path="/selfcaretasks" element={<SelfCareTasks />} />
              <Route path="/preferences" element={<Preferences />} />
            </Routes>
          </Card>
        </Container>
      </>
    );
  }
}

export default App;
