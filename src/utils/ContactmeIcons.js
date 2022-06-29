import React from "react";
const ContactMeIcons = (props) => {
  return (
    <>
      <a
        href={props.link}
        class={props.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class={props.icon}></i>
        </span>
      </a>
    </>
  );
};

export default ContactMeIcons;
