import "./App.css";
// import Box from "./assets/components/Box";
import { useState } from "react";
import PersonList from "./assets/components/PersonsList";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Counter: {counter} </p>
      <PersonList/>

    </>
  );
}

export default App;
