import "./App.css";
// import Box from "./assets/components/Box";
import { useState } from "react";
// import PersonList from "./assets/components/PersonsList";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
// import Counter from "./assets/components/Counter";
import Form from "./assets/components/Form";
import View from "./assets/components/View";

function App() {
  // const [counter, setCounter] = useState(0);

  // const increase = () => {
  //   setCounter(counter + 1);
  // };
  // const decreaseCount = () => {
  //   setCounter(counter - 1);
  // };
  // const resetCount = () => {
  //   setCounter(0);
  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    messageArea: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // setFormData({...formData, [event.target.name]: event.target.value});
    setFormData((prevStat) => ({ ...prevStat, [name]: value }));
    console.log(formData);
  };

  return (
    <>
      <Header className="header" />

      <Form formHandler={formHandler} />
      <View {...formData} />
      <Footer />
    </>
  );
}

export default App;
