import React from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

const Skills = () => {
  const skillsPageData = [
    {
      id: uuidv4(),
      skillName: "HTML",
      skillIcon: "fa-brands fa-html5 skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "CSS",
      skillIcon: "fa-brands fa-css3-alt skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "Bootstrap",
      skillIcon: "fa-brands fa-bootstrap skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "JavaScript",
      skillIcon: "fa-brands fa-js skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "Python",
      skillIcon: "fa-brands fa-python skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "React",
      skillIcon: "fa-brands fa-react skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "Angular",
      skillIcon: "fa-brands fa-angular skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "Node.js",
      skillIcon: "fa-brands fa-node skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "SQL",
      skillIcon: "fa-solid fa-database skill-icon"
    },
    {
      id: uuidv4(),
      skillName: "MongoDB",
      skillIcon: "fa-brands fa-envira skill-icon"
    }
  ];

  return (
    <div className='main4 pt-5 pb-5' id="skillsection">
      <h1 className='nametxt text-center mt-5'>Skills</h1>
      <ul className='skillscon'>
        {skillsPageData.map(skill => (
          <li key={skill.id} className='skill-item'>
            <div className="text-center skill-card">
              <i className={skill.skillIcon}></i>
              <hr className='line'/>
              <p className="skill-name">{skill.skillName}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
