/** @format */
import React from "react";
import Title from "./Title";

export default function Information() {
  return (
    <div className="information-container">
      <div className="information-topbar">
        <span className="information-topbar-button-1"></span>
        <span className="information-topbar-button-2"></span>
        <span className="information-topbar-button-3"></span>
      </div>
      <div className="information-section">
        <div className="information-section-position">
          <div className="information-item">
            <p>> Octavian.currentLocation</p>
            <p>"Birmingham, UK"</p>
          </div>
          <div className="information-item">
            <p>> Octavian.contactInfo</p>
            <p>
              ["<a href="mailto:octaviandd@yahoo.com">octaviandd@yahoo.com</a>",
              "
              <a
                href="https://github.com/octaviandd"
                style={{ color: "#6beffe" }}
              >
                GitHub
              </a>
              ", "
              <a href="https://www.linkedin.com/in/octavian-david-41b610180/">
                LinkedIn
              </a>
              "]
            </p>
          </div>
          <div className="information-item">
            <p>> Octavian.resume</p>
            <p>
              <a>"resume.pdf"</a>
            </p>
          </div>
          <div className="information-item">
            <p>> Octavian.interests</p>
            <p>
              ["chess", "gaming", "philosophy", "psychology", "martial arts",
              "nutrition", "fitness"]
            </p>
          </div>
          <div className="information-item">
            <p>> Octavian.education</p>
            <p>"B.Sc. Psychology - Coventry University, Coventry</p>
          </div>
          <div className="information-item">
            <p>> Octavian.skills</p>
            <p>
              ["HTML", "CSS", "JavaScript", "Python", "webpack", "React", "git",
              "NPM", "terminal"]
            </p>
          </div>
          <div className="information-item">
            <p>
              <Title strings={[""]} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
