import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/FormComponents/Form";
import Preview from "./components/PreviewComponents/Preview";
import "./App.css";

const generalInfo = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  phone: "(123)456-7890",
  city: "San Francisco, CA",
  objective:
    "A passionate Computer Science graduate looking to apply their skills as a Software Engineer. Seeking to use strong programming and development skills gained through side and school projects to help reach the Software Engineering team’s goals.",
};

const skillsInfo = ["Java", "JavaScript", "ReactJS", "Jira", "Agile"];

const schoolInfo = [
  {
    schoolName: "University of California, San Diego",
    degree: "M.S. Computer Science",
    city: "San Diego, CA",
    startDate: "Sept 2021",
    endDate: "Present",
  },
  {
    schoolName: "San Diego State University",
    degree: "B.S. Computer Science",
    city: "San Diego, CA",
    startDate: "Aug 2016",
    endDate: "May 2020",
  },
];

const expInfo = [
  {
    companyName: "Google",
    position: "Software Engineer",
    city: "San Diego, CA",
    tasks: "- task 1 \n- task 2 \n- task 3",
    startDate: "June 2020",
    endDate: "Present"
  },
  {
    companyName: "Qualcomm",
    position: "Intern",
    city: "San Diego, CA",
    tasks: "- task 1 \n- task 2 \n- task 3",
    startDate: "June 2019",
    endDate: "Sept 2019"
  }
];

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
      return [school, ...prevSchools];
    });
    console.log(schools);
  };

  const saveWorkDataHandler = (work) => {
    console.log(work);
    setExperience((prevExperience) => {
      return [work, ...prevExperience];
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
      <Header />
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
