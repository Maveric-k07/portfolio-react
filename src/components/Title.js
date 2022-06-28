import React from "react";
import BackgroundImage from "../assets/background.jpg";
// add button and background image

const Title = () => {
  return (
    <div className="container-fluid title-section">
      <div id="title" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <h1>Full-stack</h1>
        <h1>
          <b>Web</b> and <b>Mobile</b>
        </h1>
        <h1>developer</h1>
        <a href="#skills" class="btn btn-outline-light btn-lg title-button">
          TELL ME MORE
        </a>
      </div>
    </div>
  );
};

export default Title;
