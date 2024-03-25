import "./App.css";
// import Box from "./assets/components/Box";
import { useState } from "react";
import PersonList from "./assets/components/PersonsList";

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = ()=>{
    console.log(`Handler on duty`);
  }
  return (
    <>
      <p>Counter: {counter} </p>
      <button onClick={clickHandler}>Count</button>
      <PersonList/>

    </>
  );
}

export default App;
