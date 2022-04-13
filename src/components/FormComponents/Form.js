import React, { useState } from "react";
import GeneralForm from "./GeneralForm";
import SchoolForm from "./SchoolForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";

const Form = (props) => {
  const saveGeneralInfoHandler = (enteredGeneralInfo) => {
    props.onSaveGeneralInfo(enteredGeneralInfo);
  };

  const saveSchoolDataHandler = (enteredSchoolInfo) => {
    props.onSaveSchoolData(enteredSchoolInfo);
  };

  const saveWorkDataHandler = (enteredWorkInfo) => {
    props.onSaveWorkData(enteredWorkInfo);
  };

  const saveSkillsHandler = (enteredSkillsInfo) => {
    props.onSaveSkills(enteredSkillsInfo);
  };

  const deleteSkillHandler = (removedSkill) => {
    props.onDeleteSkill(removedSkill);
  };

  return (
    <div>
      <h3>Enter Information: </h3>
      <div>
        <GeneralForm
          generalInfo={props.generalInfo}
          onSaveGeneralInfo={saveGeneralInfoHandler}
        />
        <SkillsForm
          skills={props.skills}
          onSaveSkills={saveSkillsHandler}
          onDeleteSkill={deleteSkillHandler}
        />
        <SchoolForm
          schools={props.schools}
          onSaveSchoolData={saveSchoolDataHandler}
        />
        <WorkForm
          experience={props.experience}
          onSaveWorkData={saveWorkDataHandler}
        />
      </div>
    </div>
  );
};

export default Form;
