import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/FormComponents/Form";
import Preview from "./components/PreviewComponents/Preview";
import "./App.css";

const generalInfo = {
  name: "",
  email: "",
  phone: "",
  city: "",
  objective: "",
};

const skillsInfo = [];

const schoolInfo = [];

const expInfo = [];

const App = () => {
  const [genInfo, setGenInfo] = useState(generalInfo);
  const [schools, setSchools] = useState(schoolInfo);
  const [experience, setExperience] = useState(expInfo);
  const [skills, setSkills] = useState(skillsInfo);

  const saveGeneralInfoHandler = (enteredGeneralInfo) => {
    setGenInfo(enteredGeneralInfo);
    console.log(enteredGeneralInfo);
  };

  const saveSchoolDataHandler = (school) => {
    console.log(school);
    setSchools((prevSchools) => {
      return [...prevSchools, school];
    });
    console.log(schools);
  };

  const saveWorkDataHandler = (work) => {
    console.log(work);
    setExperience((prevExperience) => {
      return [...prevExperience, work];
    });
  };

  const saveSkillsHandler = (skill) => {
    console.log(skill);
    setSkills((prevSkills) => {
      return [...prevSkills, skill];
    });
  };

  const deleteSkillHandler = (removedSkill) => {
    setSkills((prevSkills) => {
      return prevSkills.filter((skill) => skill !== removedSkill);
    });
  };

  const deleteSchoolHandler = (removedSchool) => {
    setSchools((prevSchools) => {
      return prevSchools.filter(
        (school) => school.schoolName !== removedSchool
      );
    });
  };

  const deleteExperienceHandler = (removedExperience) => {
    setExperience((prevExperience) => {
      return prevExperience.filter(
        (experience) => experience.startDate !== removedExperience
      );
    });
  };

  return (
    <div>
      <Header/>
    <div className="body-div">
      <Form
        generalInfo={genInfo}
        onSaveGeneralInfo={saveGeneralInfoHandler}
        onSaveSchoolData={saveSchoolDataHandler}
        onSaveWorkData={saveWorkDataHandler}
        onSaveSkills={saveSkillsHandler}
        onDeleteSkill={deleteSkillHandler}
        schools={schools}
        experience={experience}
        skills={skills}
      />
      <Preview
        generalInfo={genInfo}
        schools={schools}
        experience={experience}
        skills={skills}
        onDeleteSchool={deleteSchoolHandler}
        onDeleteExperience={deleteExperienceHandler}
      />
    </div>
    </div>
  );
};

export default App;
