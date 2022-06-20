import React from "react";

import "./Company.css";

const Company = (props) => {
  const deleteButtonHandler = (event) => {
    props.onDeleteExperience(event.target.value);
  };

  return (
    <div className="company-div">
      <div className="preview-title-dates">
        <span className="company-title">{props.companyName}</span>
        <div>
          <span>{props.startDate}</span>
          {" - "}
          <span>{props.endDate}</span>
        </div>
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
      <div className="company-button-div">
        <button value={props.startDate} onClick={deleteButtonHandler}>
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default Company;
