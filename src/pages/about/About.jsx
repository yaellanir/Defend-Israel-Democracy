import React from "react";
import logo1 from '../../imgs/partners/1.png'
import logo2 from '../../imgs/partners/2.png'
import logo3 from '../../imgs/partners/3.png'
import logo4 from '../../imgs/partners/4.png'
import logo5 from '../../imgs/partners/5.png'
import logo6 from '../../imgs/partners/6.png'
import logo7 from '../../imgs/partners/7.png'
import logo8 from '../../imgs/partners/8.png'
import "./About.css";

function About() {
  return (
    
    <div id="about" className="about-wrapper">
      <div className="section1">
      <div className="aboutText">What is Defend Israeli Democracy (DID)? </div>
      <p className="aboutP">
        Defend Israeli Democracy is a grassroots movement of Israelis around the
        world, who love Israel and wish to see it thrive as a strong democratic
        nation. Since its foundation in 2020 in Berlin, Germany, our supporters
        have helped organize many protests around the world. In addition, we
        advocate worldwide Israeli political participation by amending voting
        laws to allow overseas voting through our partner organization, Israelis
        without Borders.
      </p>
    </div>
    <div className="section2">
      <div className="ourPartnersText">Our Partners</div>
      <div className="logos-wrapper">
        <img className="partnerLogo"
          src={logo1}
          alt="logo1"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo2}
          alt="logo2"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo3}
          alt="logo3"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo4}
          alt="logo4"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo5}
          alt="logo5"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo6}
          alt="logo6"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo7}
          alt="logo7"
          style={{ height: "40px" }}/>
        <img className="partnerLogo"
          src={logo8}
          alt="logo8"
          style={{ height: "40px" }}/>
      </div>
    </div>
    </div>
  );
}

export default About;
