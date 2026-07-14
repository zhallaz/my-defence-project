import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quo deserunt
              dignissimos sunt accusantium earum placeat officia esse, mollitia non. Lorem ipsum
              dolor sit amet.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+2349066951245</li>
              <li>contact@ezejichinemerem34@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 @ Zhallaz.com . All Right Reserved</p>
    </div>
  );
};

export default Footer;
