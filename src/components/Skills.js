import React from 'react'
import Heading from '../utils/Heading'
import SkillCard from '../utils/SkillCard'

//figure out a way to add a separate avatar for each skillcard. Avatars for skillcard and aboutme section will use the same avatar component that is not created yet.

const Skills = () => {
  return (
    <div className='section section-dark'>
      <div className='section-content' id="skills">
        <Heading heading={"WHAT I DO"}/>
        <h3><i>things I'm skilled at and passionate about</i></h3>
        <SkillCard 
            name='Web Development'  
            content='Fast, responsive and engaging apps that bring your ideas to life.'
        />
        <SkillCard 
            name='Mobile Application Development'
            content='Cross-platform apps built with efficiency and speed for Android and iOS.'
        />
    </div>
    </div>
  )
}

export default Skills