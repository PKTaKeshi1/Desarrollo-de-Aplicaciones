import React, { Component } from "react";

class Form extends Component {
  initialState = { name: "", job: "" };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="job">Trabajo</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />

        <input type="button" value="Agregar" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
