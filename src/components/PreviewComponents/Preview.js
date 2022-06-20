import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Skills from "./Skills";

import "./Preview.css";

const Preview = (props) => {
  const deleteSchoolHandler = (removedSchool) => {
    props.onDeleteSchool(removedSchool);
  };

  const deleteExperienceHandler = (removedExperience) => {
    props.onDeleteExperience(removedExperience);
  };

  return (
    <div className="preview">
      <h3>Preview CV: </h3>
      <div>
        <General generalInfo={props.generalInfo} />
        <Skills skills={props.skills} />
        <Education
          schools={props.schools}
          onDeleteSchool={deleteSchoolHandler}
        />
        <Experience
          experience={props.experience}
          onDeleteExperience={deleteExperienceHandler}
        />
      </div>
    </div>
  );
};

export default Preview;
