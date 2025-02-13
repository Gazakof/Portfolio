import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Studies from "./components/studies/Studies";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

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

      <Footer />
    </div>
  );
};

export default App;
