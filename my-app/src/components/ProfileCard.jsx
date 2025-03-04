import React from "react";
import "./ProfileCardStyle.css";

const ProfileCard = ({ image, name, skills }) => {
  return (
    <section className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProfileCard;