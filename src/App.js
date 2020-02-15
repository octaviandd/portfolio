/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <div style={{ marginBottom: "13vh" }}>
          <Title
            strings={[
              "octaviandavid@Octavians-MacBook-Pro ~ % hi, i'm octavian",
              "octaviandavid@Octavians-MacBook-Pro ~ % wanna take a look?",
              "octaviandavid@Octavians-MacBook-Pro ~ % npm start"
            ]}
          />
        </div>
        <Information />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
