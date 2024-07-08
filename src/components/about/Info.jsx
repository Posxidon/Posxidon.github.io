import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiBriefcase } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiBriefcase className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 year Co-op</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">8 Personal Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Technolgies Used</h3>
            <span className="about__subtitle">50+</span>
        </div>
    </div>
  );
}

export default Info;