/** @format */

import React from "react";

export default function Projects() {
  return (
    <div className="projects-container">
      <section>
        <h1 id="projects">Projects</h1>
        <div className="projects-list">
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
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>ES6</p>
                <p>CreateReactApp</p>
                <p>ReactJS</p>
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
          <article className="project-item">
            <div className="project-image2"></div>
            <div className="project-information">
              <h3>Git-Player</h3>
              <p>
                {" "}
                The most popular technology amongst programmers and a a really
                good tool to cooperate with others. Git-Player is one of my
                projects aimed towards helping the comunity. It uses GitHub API
                and renders the top git repositories.
              </p>
              <div className="project-stack">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>CreateReactApp</p>
                <p>ES6</p>
                <p>ReactJS</p>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://git-search-octavian.netlify.com/">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/git-repositories-react">
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
              <h3>Movie-Search</h3>
              <p>
                As an avid movies fan, one project that seemed intersting to me
                was one that made use of a pulbic API, more specifically MovieDB
                API. Movie-Search alows you to search for movies and gives IMDB
                ratings and other similar movies.
              </p>
              <div className="project-stack">
                {" "}
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>CreateReactApp</p>
                <p>ES6</p>
                <p>ReactJS</p>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://moovie-search-octavian.netlify.com/">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/movie-search-react">
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
              <h3>To Do App</h3>
              <p>
                My first real challenge in Vanilla JavaScript comes after many
                other smaller projects. A To Do App is build with the same
                basics that complex web applications are build upon. This
                project makes use of localStorage and renders different tasks
                and options.
              </p>
              <div className="project-stack">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Webpack</p>
                <p>NPM</p>
                <p>JavaScript</p>
                <p>ES6</p>
              </div>
              <div className="project-links">
                <button>
                  <a href="https://todoapp-octavian.netlify.com">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="https://github.com/octaviandd/todoApp">
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
