/** @format */

import React from "react";
import Scrollchor from "react-scrollchor";

export default class Navbar extends React.Component {
  componentDidMount() {
    this.refs.navbar.addEventListener("click", e => {
      if (e.target.innerText === "Projects") {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      } else if (e.target.innerText === "Contact") {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  render() {
    return (
      <div className="navbar" ref="navbar">
        <div className="icon-bar">
          <Scrollchor to="#projects">
            <i className="fas fa-file-code"></i>
          </Scrollchor>
          <Scrollchor to="#contact">
            <i className="far fa-envelope"></i>
          </Scrollchor>
          <i className="fab fa-github"></i>
        </div>
      </div>
    );
  }
}
