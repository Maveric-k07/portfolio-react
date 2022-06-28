import * as React from "react";
import "../styles/projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-body">
          <img src={props.img} className="card__image" alt="project" />
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.description}</p>
        </div>
        <button className="card__btn">View Project</button>
      </div>
    </div>
  );
}
