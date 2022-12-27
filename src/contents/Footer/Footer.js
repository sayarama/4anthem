import React from "react";
import { Link } from "react-router-dom";
import { instagram } from "../img";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/4anthems/" target="blank">
        <img src={instagram} />
      </a>

      <p>Copyright 2022-4Anthems</p>
    </div>
  );
}

export default Footer;
