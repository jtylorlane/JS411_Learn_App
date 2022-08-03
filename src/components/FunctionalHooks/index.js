import React, { useState } from 'react';

export function ExampleComponent() {
  // Declare a new state variable, which we'll call `count` with an initial value of `0`
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export function Hidden() {
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        let status = isHidden === true ? false : true
        setIsHidden(status);
    }
    
    return (
        <div>
            <p>The Status of hidden is {isHidden}</p>
            <h1 onClick={handleClick}>Functional Component Using State</h1>
        </div>
    )
}
