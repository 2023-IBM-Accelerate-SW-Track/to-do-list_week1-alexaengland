import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/Alexa_Picture.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/*<p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alexa England</div>
            <div className="brief_description">
              I am a rising junior at the University of Texas at Austin, majoring in Electrical and Computer Engineering.
            </div>
          </div>
        </div>
      </div>
    )
  }
}