import React, { useState, useEffect } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineAcademicCap, HiOutlineFolderOpen, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Harshit's Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => { setActiveNav("#home"); showMenu(false); }}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon" />Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => { setActiveNav("#about"); showMenu(false); }}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon" />About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => { setActiveNav("#skills"); showMenu(false); }}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" onClick={() => { setActiveNav("#qualifications"); showMenu(false); }}
                                className={activeNav === "#qualifications" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineAcademicCap className="nav__icon" />Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => { setActiveNav("#portfolio"); showMenu(false); }}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineFolderOpen className="nav__icon" />Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => { setActiveNav("#contact"); showMenu(false); }}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon" />Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(false)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    );
}

export default Header;
