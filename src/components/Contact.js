import React from "react";
import Heading from "../utils/Heading";
import Paragraph from "../utils/Paragraph";
import Icons from "./Icons";
//add socials

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="section-content" id="contact">
        <Heading heading={"CONTACT ME"} />
        <Icons />
        <br />
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Paragraph info={"Made with ❤️ by Akhileshwar"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
