import React from "react";

const School = (props) => {
  const deleteButtonHandler = (event) => {
    props.onDeleteSchool(event.target.value);
  };

  return (
    <div>
      <div>
        <span>{props.schoolName}</span>
        <span>{props.startDate}</span>
        <span>{props.endDate}</span>
      </div>
      <div>
        <span>{props.city}</span>
      </div>
      <div>
        <span>{props.degree}</span>
      </div>
      <button value={props.schoolName} onClick={deleteButtonHandler}>
        Delete School
      </button>
    </div>
  );
};

export default School;
