import React from 'react';
import { aboutme } from '../constants/aboutme'
import Paragraph from '../utils/Paragraph';
import Heading from '../utils/Heading'


// add avatar 
const About = () => {
  return (
    <div className='about-section'>
        <Heading heading={"About me"}/>
        <Paragraph info={"Let's break the ice a little"}/>
        <Paragraph info={aboutme}/>
    </div>
  )
}

export default About