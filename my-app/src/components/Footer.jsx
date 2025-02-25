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

import { SiGroupme } from "react-icons/si";

const Footer = () => {
  const handleGroupmeClick = useRedirectOnClick(
    "https://groupme.com/join_group/102163335/5l7p6DwY"
  );
  const handleGitHubClick = useRedirectOnClick(
    "https://github.com/Deacon-Code"
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
          <h4>About us</h4>
          <p>
            Deacon Code is Wake Forest University’s premier software engineering
            organization. Focused on technical projects and development, we
            foster innovation and collaboration within the Wake Forest
            community. Join us to code, create, and connect!
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
            <SiGroupme
              onClick={handleGroupmeClick}
              size={30}
              style={{ color: "#000", marginRight: "1rem", cursor: "pointer" }}
            />
            {/*<FaLinkedin
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
