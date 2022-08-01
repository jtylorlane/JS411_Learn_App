import React, {Component} from 'react';
// // import MyFirstComponent from '../MyFirstComponent';
import ChildComponent from './../../components/Footer/index';
import MyConditionalComponent from '../../components/MyConditionalComponent/index';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        food:'It is a frog',
        describe: 'chicken',
        arrayOfTodos: [],
        isVerified: false 
    };    
  }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json()
    }).then(arrayOfTodos => this.setState({ arrayOfTodos}))
}

    render() {
      return (
        <div>
          <MyConditionalComponent isVerified={this.state.isVerified}/>
            <ChildComponent frog={this.state.food} chicken={this.state.describe}/>
            <ol>{this.state.arrayOfTodos.map((todo, index) => {
          return (
            <li key={index}>
							{todo.title}
						</li>
          )
        })}</ol>
        </div>
      );
    }
  }
  

export default Layout;