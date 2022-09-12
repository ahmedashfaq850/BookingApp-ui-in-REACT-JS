import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src="/images/background.jpg" alt="" />
        <div className="shadow"></div>
      </div>
      <div className="banner-content">
        <h2>Need Assistance</h2>
        <p>Need Help? Call us or drop a message.</p>
        <p>Our agents will be in touch shortly</p>
        <div className="contact">
          <button className="banner-btn">CONTACT US</button>
          <div className="number">
            <FontAwesomeIcon icon={faPhone} />
            +66 82 519 2688
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
