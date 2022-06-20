import React from "react";

import "./School.css";

const School = (props) => {
  const deleteButtonHandler = (event) => {
    props.onDeleteSchool(event.target.value);
  };

  return (
    <div className="school-div">
      <div className="preview-title-dates">
        <span className="school-title">{props.schoolName}</span>
        <div>
          <span>{props.startDate}</span>
          {" - "}
          <span>{props.endDate}</span>
        </div>
      </div>
      <div>
        <span>{props.city}</span>
      </div>
      <div>
        <span>{props.degree}</span>
      </div>
      <div className="school-button-div">
        <button value={props.schoolName} onClick={deleteButtonHandler}>
          Delete School
        </button>
      </div>
    </div>
  );
};

export default School;
