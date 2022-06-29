import React from "react";

const TechCard = (props) => {
  return (
    <>
      <span className="medium iconify mySpan" data-icon={props.logo}></span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

export default TechCard;
