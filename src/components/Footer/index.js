import React from "react";

const ChildComponent = (props) => {
  // const [count, setCount] = useState(0);
  const frog = props.frog;
  const chicken = props.chicken;
  return <h1>{`A ${frog} that tastes like ${chicken}.`}</h1>;
};

export default ChildComponent;
