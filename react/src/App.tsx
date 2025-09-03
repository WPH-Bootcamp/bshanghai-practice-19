import { useState } from "react";
import ClassComponent from "./basic-component/class-component";
import FuncComponent from "./basic-component/func-component";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  // const wrongHandlerIncrement = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };
  const rightHandlerIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <ClassComponent name="david" />
      <FuncComponent name="rizki" age={count} />
      <Button
        size="small"
        variant="primary"
        onClick={() => {
          rightHandlerIncrement();
        }}
      >
        confirm button
      </Button>
    </>
  );
}

export default App;
