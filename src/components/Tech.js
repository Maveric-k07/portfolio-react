import React from "react";
import Heading from "../utils/Heading";
import "../styles/tech.css";
import TechCard from "../utils/TechCard";
import {
  frontend,
  backend,
  databases,
  languages,
  tools
} from "../constants/techdata";

function TechCardData(tech) {
  return <TechCard name={tech.name} logo={tech.logo} />;
}

const Tech = () => {
  return (
    <div className="wrapper">
      <div className="section-content" id="tech">
        <Heading heading={"MY TECH STACK"} />
        <div className="techcards-list">
          <span className="actions">
            <ul>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <p className="tech">FRONTEND </p> {frontend.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <p className="tech">BACKEND </p> {backend.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <p className="tech">DATABASES </p> {databases.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <p className="tech">LANGUAGES </p> {languages.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <p className="tech">TOOLS </p> {tools.map(TechCardData)}
              </div>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
