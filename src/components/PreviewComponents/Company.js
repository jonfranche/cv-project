import React from "react";

const Company = (props) => {
  const deleteButtonHandler = (event) => {
    props.onDeleteExperience(event.target.value);
  };

  return (
    <div>
      <div>
        <span>{props.companyName}</span>
        <span>{props.startDate}</span>
        <span>{props.endDate}</span>
      </div>
      <div>
        <span>{props.position}</span>
      </div>
      <div>
        <span>{props.city}</span>
      </div>
      <div>
        <span>{props.tasks}</span>
      </div>
      <button value={props.startDate} onClick={deleteButtonHandler}>
        Delete Company
      </button>
    </div>
  );
};

export default Company;
