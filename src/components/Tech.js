import React from "react";
import Heading from "../utils/Heading";
import "../styles/tech.css";
import TechCard from "../utils/TechCard";

import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
import databaseImg from '../assets/database.png';
import languagesImg from '../assets/languages.png';
import toolsImg from '../assets/tools.png';

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
      <div className="" id="tech">
        <Heading heading={"MY TECH STACK"} />
      <br />
        <div className="techcards-list">
          <span className="actions">



          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">FRONTEND </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techsvg left">
              <img className="techStackImage" src={frontendImg} alt="frontend" />
              </div>
              <div className="col-lg-6 techicons right">
              {frontend.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">BACKEND </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techicons left">
              {backend.map(TechCardData)}
              </div>
              <div className="col-lg-6 techsvg right">
              <img className="techStackImage" src={backendImg} alt="backend" />
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">DATABASES </p>
            <div className="container">
            <div className="row">
            <div className="col-lg-6 techsvg left">
               <img className="techStackImage" src={databaseImg} alt="database" />
            </div>
              <div className="col-lg-6 techicons right">
              {databases.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">LANGUAGES </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techicons left">
              {languages.map(TechCardData)}
              </div>
              <div className="col-lg-6 techsvg right">
              <img className="techStackImage" src={languagesImg} alt="languages" />
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">TOOLS </p>
            <div className="container">
            <div className="row">
            <div className="col-lg-6 techsvg left">
               <img className="techStackImage" src={toolsImg} alt="tools" />
            </div>
              <div className="col-lg-6 techicons right">
              {tools.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>


          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
