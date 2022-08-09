import React, { Component } from "react";

class MyFirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, todos: [], text: "" };
  }

  handleOnChange = (e) => {
    //how to change value
    this.setState({
      text: e.target.value,
    });
  };

  onClickHandler = (e) => {
    //populate array of todos with text
    console.log(this.state.text);
    //push()
    const text = this.state.text;
    const newState = [...this.state.todos];
    console.log(newState);
    newState.push(text);
    console.log("New state", newState); //["text is here now"]
    //set the state
    this.setState({
      text: "",
      todos: newState,
    });
  };

  handleClick = (index) => {
    console.log("Index", index);
    this.delete(index);
  };

  delete = (index) => {
    console.log("Thsi is gonna get deleted", index);
    const newTodos = [...this.state.todos, index];
    newTodos.splice(index, 1);
    //update state
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo</h1>
        <input value={this.state.text} onChange={this.handleOnChange} />
        <p>{this.state.text}</p>
        <button onClick={this.onClickHandler}>ADD ITEM</button>
        {this.state.todos.map((item, i) => (
          <li key={i} onClick={() => this.handleClick(i)}>
            {item}
          </li>
        ))}
      </div>
    );
  }
}

export default MyFirstClassComponent;
