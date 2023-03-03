import React from "react";
import "./footer.css";
import { MdOutlineModeNight } from "react-icons/md";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <p>Privacy Policy</p>
        <p>License</p>
        <p>API</p>
        <p>Help Center</p>
        <p className="copy">2022 All Rights Reserved</p>
      </div>
      <div className="footer-left">
        <p>English</p>

        <MdOutlineModeNight className="night-icon" />
      </div>
    </div>
  );
};

export default footer;
