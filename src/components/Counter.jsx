// import { useState } from "react";
function Counter(props) {

  return (
    <>
      <p>Counter: {props.counter} </p>
      <button onClick={props.increase}>Increase by 1</button>
      <button onClick={props.decreaseCount}>Decrease by 1</button>
      <button onClick={props.resetCount}>Reset to 0 </button>
    </>
  );
}

export default Counter;
