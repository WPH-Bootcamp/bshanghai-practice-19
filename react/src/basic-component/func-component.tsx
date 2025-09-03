import React, { useState, useEffect } from "react";

type FuncComponentProps = {
  name?: string;
  age?: number;
};

const FuncComponent: React.FC<FuncComponentProps> = (props) => {
  const { name, age } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    console.log(count);

    // cleanup function
    return () => {
      console.log("component unmounted");
    };
  }, [count]);

  return (
    <div>
      hi, {name} with age: {age}
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default FuncComponent;
