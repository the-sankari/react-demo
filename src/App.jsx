import "./App.css";
import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Form from "./assets/components/Form";
import View from "./assets/components/View";

function App() {
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
