/** @format */

import React from "react";

export default function Projects() {
  return (
    <div className="projects-container">
      <section>
        <h1 id="projects">Projects</h1>
        <div className="projects-list">
          <article className="project-item">
            <div className="project-image2"></div>
            <div className="project-information">
              <h3>InviteMe</h3>
              <p>
                {" "}
                Full-Stack application with a back-end created with NodeJS -
                ExpressJS - MongoDB, while the front-end is made with HTML - CSS
                - React. It is a tool for planning meetings overall, every user
                needs registration and authentication, made possible with
                JSONWebTokens and React Router.
              </p>
              <div className="project-stack">
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-nodejs-plain-wordmark"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://github.com/octaviandd/InviteSystem">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/InviteSystem">
                    <span>View Source</span>
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
          </article>
          <article className="project-item">
            <div className="project-image3"></div>
            <div className="project-information">
              <h3>DREAMMARKET</h3>
              <p>
                This is a personal project made with reference to my passion for
                Psychology and also a possible tool for a sub-reddit community
                of psychology, jungians and people who are interested in sharing
                their experiences and learn more.
              </p>
              <div className="project-stack">
                {" "}
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="devicon-nodejs-plain-wordmark"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                <i>
                  <span
                    class="iconify"
                    data-icon="simple-icons:redux"
                    data-inline="false"
                  ></span>
                </i>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://evening-badlands-78182.herokuapp.com/">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/DREAMMARKET">
                    <span>View Source</span>
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
          </article>
          <article className="project-item">
            <div className="project-image4"></div>
            <div className="project-information">
              <h3>Foodie</h3>
              <p>
                My thoughest challenge yet, this is a project which uses a
                nutrition API to request data. It is made of three pages, one
                four individual products, how to calculate nutrition values and
                one to search for recipes, with a sidebar for navigation made
                with React Router.
              </p>
              <div className="project-stack">
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-git-plain colored"></i>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://food-search-octavian.netlify.com/">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/food-search">
                    <span>View Source</span>
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
          </article>
          <article className="project-item">
            <div className="project-image1"></div>
            <div className="project-information">
              <h3>Moutain View</h3>
              <p>
                Looking to book a vacation in the mountains? This project is a
                copy of a modern, usual e-commerce website. It is composed of
                four pages: Home, Rooms, About and Contact and it uses React
                Router for fast mobility.
              </p>
              <div className="project-stack">
                <i class="devicon-html5-plain colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-react-original colored"></i>
                <i class="devicon-git-plain colored"></i>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://mountain-resort-react-od.netlify.com/">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/mountain-resort-react">
                    <span>View Source</span>
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
