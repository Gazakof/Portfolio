import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/services";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Home />
        <Skills />
        <Services />
      </main>
    </div>
  );
};

export default App;
