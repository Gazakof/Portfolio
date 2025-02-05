import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/services";
import Studies from "./components/studies/Studies";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Home />
        <Studies />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
