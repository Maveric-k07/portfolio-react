import React from 'react'
import ProjectCard from '../utils/ProjectCard'
import Heading from '../utils/Heading'


const Projects = () => {
  return (
    <div className='projects-section'>
        <Heading heading={"Portfolio"} />
        <h3>Some of my latest work</h3>
        <ProjectCard name='test' description='test'/>
        <ProjectCard name='test1' description='test1'/>
    </div>
  )
}

export default Projects;