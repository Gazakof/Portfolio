import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/services";
import Studies from "./components/studies/Studies";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Home />
        <Studies />
        <Skills />
        <Services />
      </main>
    </div>
  );
};

export default App;
