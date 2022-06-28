import React from "react";

//logo for every card and use props to fill title and content details of the skillcard

const SkillCard = (props) => {
  return (
    <>
      <div class="col-lg-4 features">
        <i class={props.icon}></i>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
    </>
  );
};

export default SkillCard;
