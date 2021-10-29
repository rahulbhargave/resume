import React from "react";
import { IEducation, IWork, ISkill } from "../types/IResume";

const Resume: React.FC<any> = ({ resume }) => {
  const { skillmessage, education, work, skills } = resume;
  const educations = education.map((education: IEducation) => {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });
  const works = work.map((work: IWork) => {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });
  const allSkills = skills.map(function (skill: ISkill) {
    var className = "bar-expand " + skill.name.toLowerCase();
    return (
      <li key={skill.name}>
        <span style={{ width: skill.level }} className={className}></span>
        <em>{skill.name}</em>
      </li>
    );
  });
  return (
    <section id="resume">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{allSkills}</ul>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{works}</div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educations}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
