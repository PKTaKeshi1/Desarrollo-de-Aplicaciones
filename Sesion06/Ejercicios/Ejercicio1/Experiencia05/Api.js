import React, { Component } from "react";

class Api extends Component {
  state = { data: [] };

  componentDidMount() {
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ data: result[1].slice(0, 5) }); // solo 5 resultados
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
}
export default Api;
