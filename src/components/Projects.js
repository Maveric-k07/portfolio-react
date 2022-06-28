import React from "react";
import ProjectCard from "../utils/ProjectCard";
import Heading from "../utils/Heading";
import "../styles/projectcard.css";
import { projects } from "../constants/projectdata";

function ProjectCardData(project) {
  return (
    <ProjectCard img={project.image} name={project.title} description={project.description} link={project.link} />
  );
}

const Projects = () => {
  return (
    <div className="container wrapper">
      <div className="row" id="projects">
        <Heading heading={"Portfolio"} />
        <h3>Some of my latest work</h3>
        <ProjectCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="test"
          description="test"
        />
        <ProjectCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="test"
          description="test"
        />
        <ProjectCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="test"
          description="test"
        />
        <ProjectCard
          img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="test"
          description="test"
        />
      </div>
    </div>
  );
};

export default Projects;
