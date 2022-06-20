import React, { useState } from "react";

const SchoolForm = (props) => {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const schoolNameChangeHandler = (event) => {
    setSchoolName(event.target.value);
  };

  const degreeChangeHandler = (event) => {
    setDegree(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  }

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const schoolData = {
      schoolName: schoolName,
      degree: degree,
      city: city,
      startDate: startDate,
      endDate: endDate,
    };

    props.onSaveSchoolData(schoolData);
    setSchoolName("");
    setDegree("");
    setCity("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label>School Name: </label>
          <input
            name={schoolName}
            value={schoolName}
            type="text"
            onChange={schoolNameChangeHandler}
          />
        </li>
        <li>
          <label>Degree: </label>
          <input
            name={degree}
            value={degree}
            type="text"
            placeholder="ex: B.S. Computer Science"
            onChange={degreeChangeHandler}
          />
        </li>
        <li>
          <label>City: </label>
          <input
            name={city}
            value={city}
            type="text"
            placeholder="ex: Austin, TX"
            onChange={cityChangeHandler}
          />
        </li>
        <li>
          <label>Start Date: </label>
          <input
            name={startDate}
            value={startDate}
            type="text"
            placeholder="Month & Year"
            onChange={startDateChangeHandler}
          />
        </li>
        <li>
          <label>End Date: </label>
          <input
            name={endDate}
            value={endDate}
            type="text"
            placeholder="Month & Year"
            onChange={endDateChangeHandler}
          />
        </li>
      </ul>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default SchoolForm;
