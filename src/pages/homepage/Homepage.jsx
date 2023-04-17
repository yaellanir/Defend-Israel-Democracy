import React from "react";
import Donate from "../../components/Donate/Donate";
import MailingList from "../../components/Mailing-list-btn/MailingList";
import EventsBtn from "../../components/EventsBtn/EventsBtn";
import logo from "../../imgs/did-logo-png.png";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import video from "../../imgs/video.mp4";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage-main">
      <div className="wrapper">
        <video
          className="video"
          src={video}
          controls="controls"
          autoPlay="true"
        />
        <div>
          <img
            className="logoImg"
            src={logo}
            alt="logoImg"
            style={{ height: "150px" }}
          />
        </div>
        <div className="text">Defend Israeli Democracy</div>
        <div className="buttons-section">
          <Donate />
          <MailingList />
          <EventsBtn />
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Homepage;
