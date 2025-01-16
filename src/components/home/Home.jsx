import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="hom__content grid">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Home;
