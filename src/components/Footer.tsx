import React from "react";
import Logo from "../images/logo.png";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            ea ipsa ratione corrupti dolore error, architecto delectus expedita
            aspernatur. Accusantium aspernatur vel fugiat ad non officia beatae
            dignissimos error quidem.
          </p>
          <div className="footer__socials">
            <a
              href="http://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="http://www.twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/event">Event</Link>
          <Link to="/communities">Communities</Link>
          <Link to="/faqs">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} All rights reserved. Designed by
          Dian Rahmadani
        </small>
      </div>
    </footer>
  );
}

export default Footer;
