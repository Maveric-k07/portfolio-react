import * as React from "react";
import "../styles/projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt="project" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Project</button>
    </div>
  );
}
