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
    <div className="section section-dark">
      <div className="section-content" id="tech">
        <Heading heading={"My tech stack"} />
        <div className="techcards-list">
          <span className="actions">
            <ul>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <span>Frontend: </span> {frontend.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <span>Backend: </span> {backend.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <span>Databases: </span> {databases.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <span>Languages: </span> {languages.map(TechCardData)}
              </div>
              <div className="TechCard p-3 mb-2 bg-light text-dark">
                <span>Tools: </span> {tools.map(TechCardData)}
              </div>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
