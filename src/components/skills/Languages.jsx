import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const languages = [
    "Assembly", "C", "C++", "Elm", "GoLang", "Haskell", "HTML/CSS",
    "Java", "JavaScript", "LATEX", "Matlab", "PHP", "Python", "Shell", "TypeScript"
];

const splitLanguages = (langs) => {
    const midpoint = Math.ceil(langs.length / 2);
    return [langs.slice(0, midpoint), langs.slice(midpoint)];
};

const [group1, group2] = splitLanguages(languages);

const Languages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {group1.map((language, index) => (
                        <div className="skills__data" key={index}>
                            <HiCheckBadge />
                            <div>
                                <h3 className="skills__name">{language}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills__group">
                    {group2.map((language, index) => (
                        <div className="skills__data" key={index}>
                            <HiCheckBadge />
                            <div>
                                <h3 className="skills__name">{language}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Languages;
