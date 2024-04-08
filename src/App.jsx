import "./App.css";
// import Box from "./assets/components/Box";
// import { useState } from "react";
import PersonList from "./assets/components/PersonsList";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Counter from "./assets/components/Counter";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <PersonList />
      <Footer />
    </>
  );
}

export default App;
