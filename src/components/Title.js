/** @format */
import Typed from "typed.js";
import React, { Component } from "react";

export default class Title extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 20,
      backSpeed: 30
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <React.Fragment>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
