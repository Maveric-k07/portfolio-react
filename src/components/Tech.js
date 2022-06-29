import React from 'react'
import Heading from '../utils/Heading';
import "../styles/tech.css";
import TechCard from '../utils/TechCard';
import { frontend, backend, databases, languages, tools } from '../constants/techdata';

function TechCardData(tech) {
  return (
    <TechCard name={tech.name} logo={tech.logo} />
  );
}



const Tech = () => {
  return (
    <div className='section section-dark'>
      <div className='section-content' id='tech'>
        <Heading heading={"My tech stack"} />
        <div className='techcards-list'>
          <span className='actions'>
            <ul>
              <span>Frontend: </span> {frontend.map(TechCardData)}
              <span>Backend: </span> {backend.map(TechCardData)}
              <span>Databases: </span> {databases.map(TechCardData)}
              <span>Languages: </span> {languages.map(TechCardData)}
              <span>Tools: </span> {tools.map(TechCardData)}
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tech;