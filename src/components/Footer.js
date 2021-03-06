import React from "react";
import "../styles/layouts/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footerText">
        Are you interested in the code for my profile page? You can find it
        here:
      </p>
      <a
        aria-label="GitHub-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/anzamarska/personal-web"
      >
        <p className="footerText"> GITHUB</p>
        <img className="socialIcon" src="github.svg" alt="github" />
      </a>
      <p className="footerMobileText">
        check this page also in the mobile version
      </p>
      <br />{" "}
      <div className="social">
        <p className="footerText">&copy;2020 Anna Zamarska </p>

        <a
          aria-label="GitHub-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/anzamarska"
        >
          <img className="socialIcon" src="github.svg" alt="github" />
        </a>
        <a
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anna-zamarska-25075714b/"
        >
          <img className="socialIcon" src="linkedin.svg" alt="linkedin" />
        </a>
        <a
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/anna.zamarska/"
        >
          <img className="socialIcon" src="inst.svg" alt="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
