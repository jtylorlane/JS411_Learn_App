import React, { useState, useEffect } from "react";

export function MyfunctionTodos() {
  const [arrayOfTodos, setArrayOfTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((todos) => setArrayOfTodos(todos)); // update state with
    // setArrayOfTodos
  }, []); //when dependency array empty works like componentDidMount
  return (
    <div>
      {arrayOfTodos.map((todo, index) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </div>
  );
}

export function MyCountComponent() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // useEffect takes in anonymous function
    let isCountEven = () => {
      if (count % 2 === 0) {
        console.log("yes count is even", count);
      }
    };
    isCountEven();
  }, [count]); //dependency array Only run when count changes
  const handleClick = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  return <h1 onClick={handleClick}>{`You clicked ${count} times`}</h1>;
}
