import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    // initialize the state with empty quotes ''
    this.state = {
      value: "",
      submittedValue: "",
    };

    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  // a method that, when called, changes the value of this.state.value
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  // this method is called when the form is submitted. Potentially an API request could go here using the data from this.state
  handleSubmit = (e) => {
    // always put this line in on submits, it prevents the page from reloading and wiping your state
    e.preventDefault();
    //   alert('A name was submitted: ' + this.state.value);
    const submittedValue = this.state.value;
    // after doing something with the data we reset the form value to empty quotes again
    this.props.foodChange(submittedValue);
    //this.setState{submittedValue}
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/* the value of the input is tied to this.state.value so when a user types the handleChange method changes this.state.value to match*/}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
