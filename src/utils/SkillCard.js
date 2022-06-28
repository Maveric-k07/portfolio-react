import React from 'react'

//logo for every card and use props to fill title and content details of the skillcard

const SkillCard = (props) => {
  return (
    <div className='skill-card'>
        <h2>{props.name}</h2>
        <p>{props.content}</p>
    </div>
  )
}

export default SkillCard;