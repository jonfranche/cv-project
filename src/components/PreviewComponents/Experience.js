import React from "react";
import Company from "./Company";

const Experience = (props) => {
  const experience = props.experience;

  const deleteExperienceHandler = (removedExperience) => {
    props.onDeleteExperience(removedExperience);
  };

  return (
    <div>
      <h3>Experience</h3>
      {experience.map((company) => (
        <Company
          key={company.startDate}
          companyName={company.companyName}
          position={company.position}
          city={company.city}
          tasks={company.tasks}
          startDate={company.startDate}
          endDate={company.endDate}
          onDeleteExperience={deleteExperienceHandler}
        />
      ))}
    </div>
  );
};

export default Experience;
