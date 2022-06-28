import React from 'react'
import SkillCard from '../utils/SkillCard'

const Skills = () => {
  return (
    <div className='skills'>
        <h1>WHAT I DO</h1>
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
  )
}

export default Skills