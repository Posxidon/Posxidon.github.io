import React from 'react';
import "./skills.css";
import Languages from './Languages';
import Technologies from './Technologies';
import DeveloperTools from './DeveloperTools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container container grid">
            <Languages />
            <Technologies />
            <DeveloperTools />
        </div>
    </section>
  );
}

export default Skills;