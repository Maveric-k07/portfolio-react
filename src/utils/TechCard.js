import React from 'react'


const TechCard = (props) => {
  return (
      <>
        <span className='hide'> {props.name}</span> <span className="iconify mySpan" data-icon={props.logo}></span>
      </>
  )
}

export default TechCard