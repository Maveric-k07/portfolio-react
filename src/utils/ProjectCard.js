import React from 'react'
import Paragraph from './Paragraph'


//need image at the beginning
const ProjectCard = (props) => {
  return (
    <div className='project-card'>
        <h2>{props.name}</h2>
        <Paragraph info={props.description}/>
    </div>
  )
}

export default ProjectCard