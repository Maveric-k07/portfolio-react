import React from "react";
import Heading from "../utils/Heading";
import Paragraph from "../utils/Paragraph";
import Icons from "./Icons";
//add socials

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="section-content" id="contact">
        <Heading heading={"Contact me"} />
        <Icons />
        <br />
        <Paragraph info={"Made with ❤️ by Akhileshwar"} />
      </div>
    </div>
  );
};

export default Contact;
