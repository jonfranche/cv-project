import React, { useState } from "react";

const WorkForm = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const companyNameChangeHandler = (event) => {
    setCompanyName(event.target.value);
  };

  const positionChangeHandler = (event) => {
    setPosition(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  }

  const tasksChangeHandler = (event) => {
    setTasks(event.target.value);
  };

  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const workData = {
        companyName: companyName,
        position: position,
        city: city,
        tasks: tasks,
        startDate: startDate,
        endDate: endDate
    }

    props.onSaveWorkData(workData);
    setCompanyName("");
    setPosition("");
    setCity("");
    setTasks("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label>Company Name: </label>
          <input
            name={companyName}
            value={companyName}
            type="text"
            onChange={companyNameChangeHandler}
          />
        </li>
        <li>
          <label>Position: </label>
          <input
            name={position}
            value={position}
            type="text"
            onChange={positionChangeHandler}
          />
        </li>
        <li>
          <label>City: </label>
          <input
            name={city}
            value={city}
            type="text"
            onChange={cityChangeHandler}
          />
        </li>
        <li>
          <label>Tasks: </label>
          <textarea
            name={tasks}
            value={tasks}
            onChange={tasksChangeHandler}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkForm;
