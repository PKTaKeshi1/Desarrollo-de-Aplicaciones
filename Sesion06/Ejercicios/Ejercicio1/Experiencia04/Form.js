import React, { Component } from "react";

class Form extends Component {
  initialState = { name: "", job: "", age: "" };
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
    const { name, job, age } = this.state;
    return (
      <form>
        <input type="text" name="name" value={name} placeholder="Nombre" onChange={this.handleChange} />
        <input type="text" name="job" value={job} placeholder="Trabajo" onChange={this.handleChange} />
        <input type="number" name="age" value={age} placeholder="Edad" onChange={this.handleChange} />
        <input type="button" value="Agregar" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
