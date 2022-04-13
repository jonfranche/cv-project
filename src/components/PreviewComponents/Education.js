import React from "react";
import School from "./School";

const Education = (props) => {
  const deleteSchoolHandler = (removedSchool) => {
    props.onDeleteSchool(removedSchool);
  }

  const schools = props.schools;
  return (
    <div>
      <h3>Education</h3>
      {schools.map((school) => (
        <School
          key={school.schoolName}
          schoolName={school.schoolName}
          degree={school.degree}
          city={school.city}
          startDate={school.startDate}
          endDate={school.endDate}
          onDeleteSchool={deleteSchoolHandler}
        />
      ))}
    </div>
  );
};

export default Education;
