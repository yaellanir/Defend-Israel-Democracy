import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom'
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-wrapper">
      <div className="social">Contact Us</div>
      <a
        className="link"
        href="https://www.facebook.com/DefendIsraeliDemocracy/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-facebook fa-2xl"></i>
      </a>
      <a
        className="link"
        href="https://twitter.com/IsraeliDefend?t=q5d_T7Rc1ig-26tBCtKymA&s=08"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-twitter fa-2xl"></i>
      </a>
    </div>
  );
}

export default SocialMedia;
