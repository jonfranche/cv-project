import React from "react";

const Skills = (props) => {
  const skills = props.skills;
  return (
    <div>
      <h3>Skills</h3>
      <div>
        {skills.map((skill) => (
          <span key={skill}>- {skill} </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
