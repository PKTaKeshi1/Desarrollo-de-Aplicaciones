import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Table from "./components/Table";
import Form from "./components/Form";
import Api from "./components/Api";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    this.setState({
      characters: this.state.characters.filter((_, i) => i !== index),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Gestor de Personajes 👨‍💻</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/api">API</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Table
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
              </>
            }
          />
          <Route
            path="/about"
            element={<p>Aplicación creada como práctica de ReactJS.</p>}
          />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    );
  }
}

export default App;
