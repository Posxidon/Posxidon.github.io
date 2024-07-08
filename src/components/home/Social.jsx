import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import './Social.css'; // Ensure you import your CSS file

const Social = () => {
    return (
        <div className="home__social">
            <a href="mailto:harshitsharma967@gmail.com" className="home__social-icon email" target="_blank" rel="noreferrer">
                <FiMail />
            </a>
            <a href="https://github.com/Posxidon" className="home__social-icon github" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/harshit-rakesh-sharma/" className="home__social-icon linkedin" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div>
    );
}

export default Social;