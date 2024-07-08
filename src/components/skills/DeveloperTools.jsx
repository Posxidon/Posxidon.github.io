import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const developerTools = [
    "Bash", "Bitbucket", "Confluence", "Docker", "Eclipse",
    "Genchi Genbutsu", "Git", "IntelliJ Idea", "Jenkins", "Jira",
    "JUnit", "Kubernetes", "Maven", "Microsoft Azure Cloud",
    "REST API", "Selenium", "Spring Tool Suite", "TestNG", "Unix"
];

const splitTools = (tools) => {
    const midpoint = Math.ceil(tools.length / 2);
    return [tools.slice(0, midpoint), tools.slice(midpoint)];
};

const [group1, group2] = splitTools(developerTools);

const DeveloperTools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Developer Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {group1.map((tool, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__icon-wrapper">
                                <HiCheckBadge className="skills__icon"/>
                            </div>
                            <div className="skills__name-wrapper">
                                <h3 className="skills__name">{tool}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skills__group">
                    {group2.map((tool, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__icon-wrapper">
                                <HiCheckBadge className="skills__icon"/>
                            </div>
                            <div className="skills__name-wrapper">
                                <h3 className="skills__name">{tool}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeveloperTools;