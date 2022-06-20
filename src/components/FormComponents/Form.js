import React, { useState } from "react";
import GeneralForm from "./GeneralForm";
import SchoolForm from "./SchoolForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";
import CollapseButton from "./CollapseButton";

import "./Form.css";

const Form = (props) => {
  let [hideForm, setHideForm] = useState(false);

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

  const hideFormHandler = () => {
    hideForm ? setHideForm(false) : setHideForm(true);
  };

  return (
    <div className="form-component">
      <div className="form-component-top">
        <h3>Enter Information: </h3>
        <button onClick={hideFormHandler}>{hideForm ? "Show" : "Hide"}</button>
      </div>
      {hideForm ? null : (
        <div className="forms">
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
      )}
    </div>
  );
};

export default Form;
