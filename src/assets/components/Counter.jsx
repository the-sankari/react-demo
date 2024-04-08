import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseCount = () => {
    setCounter(counter - 1);
  };
  const resetCount = () => {
    setCounter(0);
  };
  return (
    <>
      <p>Counter: {counter} </p>
      <button onClick={clickHandler}>Increase by 1</button>

      <button onClick={decreaseCount}>Decrease by 1</button>
      <button onClick={resetCount}>Reset to 0 </button>
    </>
  );
}

export default Counter;