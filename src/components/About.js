import React from 'react';
import { aboutme } from '../constants/aboutme'
import Paragraph from '../utils/Paragraph';
import Heading from '../utils/Heading'


// add avatar 
const About = () => {
  return (
    <div className='section section-dark'>
      <div className='section-content' id="aboutme">
        <Heading heading={"About me"}/>
        <Paragraph info={"Let's break the ice a little"}/>
        <Paragraph info={aboutme}/>
        <Paragraph info={aboutme}/>
    </div>
    </div>
  )
}

export default About