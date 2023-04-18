import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom'
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-wrapper">
      <div className="linkSocial contact">Contact Us</div>
      <a
        className="linkSocial"
        href="https://www.facebook.com/DefendIsraeliDemocracy/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-facebook fa-2xl"></i>
      </a>
      <a
        className="linkSocial"
        href="https://twitter.com/IsraeliDefend?t=q5d_T7Rc1ig-26tBCtKymA&s=08"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-twitter fa-2xl"></i>
      </a>
      <a
        className="linkSocial"
        href="https://chat.whatsapp.com/INBLqjvbQ0AKfKcnq5Z7fX"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-whatsapp fa-2xl"></i>
      </a>
      <a
        className="linkSocial"
        href="https://www.linkedin.com/company/defend-israeli-democracy-did/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin-in fa-2xl"></i>
      </a>
    </div>
  );
}

export default SocialMedia;
