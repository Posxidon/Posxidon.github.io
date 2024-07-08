import React from 'react';
import "./footer.css";
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Harshit Sharma</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#qualifications" className="footer__link">Qualifications</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="mailto:harshitsharma967@gmail.com" className="email" target="_blank" rel="noreferrer">
                    <FiMail />
                </a>
                <a href="https://www.github.com/kmaalig" className="github" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/kmaalig/" className="linkedin" target="_blank" rel="noreferrer">
                    <FiLinkedin />
                </a>    
            </div>
            <span className="footer__copy">© 2024 Harshit Sharma. All rights reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;