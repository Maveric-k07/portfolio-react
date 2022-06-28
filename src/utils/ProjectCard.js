import React from 'react'


//need image at the beginning
const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard