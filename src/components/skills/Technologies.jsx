import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const technologies = [
    "Angular", "Azure Cloud", "MS ADF", "MS ADS", "Bootstrap",
    "Django", "Express.js", "IBM Db2", "Matplotlib","MS SQL Server", "MongoDB", "MySQL", "Node.js",
    "numpy", "pandas","PostgreSQL", "React", "scikit-learn", "scikit.metrics", "Tailwind CSS",
    "TensorFlow", "Three.js", "yfinance"
];

const splitTechnologies = (techs) => {
    const midpoint = Math.ceil(techs.length / 2);
    return [techs.slice(0, midpoint), techs.slice(midpoint)];
};

const [group1, group2] = splitTechnologies(technologies);

const Technologies = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technologies</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {group1.map((technology, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__icon-wrapper">
                                <HiCheckBadge className="skills__icon"/>
                            </div>
                            <div className="skills__name-wrapper">
                                <h3 className="skills__name">{technology}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills__group">
                    {group2.map((technology, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__icon-wrapper">
                                <HiCheckBadge className="skills__icon"/>
                            </div>
                            <div className="skills__name-wrapper">
                                <h3 className="skills__name">{technology}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;