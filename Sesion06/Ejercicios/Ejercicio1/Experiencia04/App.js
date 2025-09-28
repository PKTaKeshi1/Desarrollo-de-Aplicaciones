import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      { name: "Carlos", job: "Doctor" },
      { name: "Ana", job: "Ingeniera" },
    ],
  };

  clearCharacters = () => {
    this.setState({ characters: [] });
  };

  render() {
    return (
      <div>
        <Table characterData={this.state.characters} />
        <button onClick={this.clearCharacters}>Limpiar Tabla</button>
      </div>
    );
  }
}
export default App;