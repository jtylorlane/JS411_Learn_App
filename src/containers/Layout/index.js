import React, { Component } from "react";
import ChildComponent from "./../components/Footer/index";
import MyConditionalComponent from "../components/MyConditionalComponent/index";
import NameForm from "../components/NameForm";
// // import MyFirstComponent from '../MyFirstComponent';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "it is a frog",
      describe: "chicken",
      arrayOfTodos: [],
      isVerified: false,
    };
  }

  handleSubmitFood = (food) => {
    this.setState({ food });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((arrayOfTodos) => this.setState({ arrayOfTodos }));
  }

  render() {
    return (
      <div>
        <ChildComponent frog={this.state.food} chicken={this.state.describe} />
        <NameForm foodChange={this.handleSubmitFood} />
        <MyConditionalComponent isVerified={this.state.isVerified} />
        <ol>
          {this.state.arrayOfTodos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Layout;
