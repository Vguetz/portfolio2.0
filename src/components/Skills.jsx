import React from "react";
import { skills } from "../data";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__bar"></div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
