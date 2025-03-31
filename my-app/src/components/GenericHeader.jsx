import React, { Component } from "react";
import "./GenericHeaderStyles.css";

export class GenericHeader extends Component {
  render() {
    
    const { heading, text, backgroundImage, backgroundColor} = this.props;

    const headerStyle = backgroundImage ?
    {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    } : 
    {
        backgroundColor  : backgroundColor || "#000",
    }

    return (
      <div className="headerStyle" style={headerStyle}>
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default GenericHeader;
