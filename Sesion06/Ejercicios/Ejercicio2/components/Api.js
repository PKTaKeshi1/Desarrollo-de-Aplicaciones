import React, { Component } from "react";

class Api extends Component {
  state = { data: [] };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*";

    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ data: result[1] }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2>Datos desde la API de Wikipedia</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Api;
