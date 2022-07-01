import React from "react";
import BackgroundImage from "../assets/background.jpg";
import Icons from "./Icons";
// add button and background image

const myStyle = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "3rem 25rem 12rem",
  textAlign: "center"
};


const Title = () => {
  return (
    <div id="title" style={myStyle} >
      <div className="container-fluid">
        <h1>Full-stack</h1>
        <h1>
          <b>Web</b> and <b>Mobile</b>
        </h1>
        <h1>developer</h1>
        <br />
        <Icons />
        <a href="#skills" class="btn btn-outline-light btn-lg title-button">
          TELL ME MORE
        </a>
      </div>
    </div>
  );
};

export default Title;
