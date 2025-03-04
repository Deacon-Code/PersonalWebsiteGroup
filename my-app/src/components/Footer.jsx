import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaSlack,
  FaSearchLocation,
  FaTwitter,
  FaInstagram,
  FaCalendar,
  FaCalendarAlt,
  FaGithub,
} from "react-icons/fa";

import { IoIosWarning } from "react-icons/io";

import useRedirectOnClick from "../hooks/useRedirectOnClick.js";

import { SiGroupme, SiInstagram } from "react-icons/si";

const Footer = () => {
  const handleInstagramClick = useRedirectOnClick(
    "https://instagram.com"
  );
  const handleGitHubClick = useRedirectOnClick(
    "https://github.com/Deacon-Code"
  );
  const handleLinkedInClick = useRedirectOnClick(
    "https://linkedin.com"
  );

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="linkedin">
            <FaLinkedin
              size={20}
              style={{ color: "#000", marginRight: "2rem" }}
            />
            <div>
              <p>See my Work</p>
              <h4> Blah, Blah, Blah, if you want</h4>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              passta23@wfu.edu
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaSearchLocation
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              Raleigh, NC, USA
            </h4>
            <div className="disclaimer">
              <h4>
                <IoIosWarning
                  size={30}
                  style={{ color: "#000", marginRight: "2rem" }}
                />
                Location and time subject to change.
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>My Services</h4>
          <p>
            I am so awesome, please hire me. I will sweep floors at FAANG just to put 
            it on my resume that I worked for FAANG. If not, direct me to the nearest
            homeless shelter in NLog(N) time.
          </p>
          <div className="socials">
            {
              <FaGithub
                onClick={handleGitHubClick}
                size={30}
                style={{
                  color: "#000",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              />
            }
            {<SiInstagram
              onClick={handleInstagramClick}
              size={30}
              style={{ color: "#000", marginRight: "1rem", cursor: "pointer" }}
            />}
            {<FaLinkedin
              onClick = {handleLinkedInClick}
              size={30}
              style={{ color: "#000", marginRight: "1rem", cursor: "pointer" }}
            />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
