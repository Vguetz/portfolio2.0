import React from 'react';
import { skills } from '../data';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                return (
                  <div className="progress__box" key={index}>
                    <div className="progress__bar">
                      <ProgressBar
                        completed={percentage}
                        maxCompleted={100}
                        animateOnRender={true}
                        bgColor="var(--first-color)"
                        customLabel=" "
                      />
                    </div>
                    <h3 className="skills__title">{title}</h3>
                  </div>
                );
            } )}
        </>
    )
}

export default Skills
