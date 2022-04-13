import React, { useState } from "react";

const GeneralForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [objective, setObjective] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const objectiveChangeHandler = (event) => {
    setObjective(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const generalInfo = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      objective: objective
    };

    props.onSaveGeneralInfo(generalInfo);
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setObjective("");
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name={name}
            value={name}
            placeholder="Firstname Lastname"
            onChange={nameChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name={email}
            value={email}
            onChange={emailChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            name={phone}
            value={phone}
            placeholder="ex: (555)555-5555"
            onChange={phoneChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name={city}
            value={city}
            placeholder="ex: San Francisco, CA"
            onChange={cityChangeHandler}
          />
        </li>
        <li>
          <label htmlFor="objective">Objective: </label>
          <textarea
            name={objective}
            value={objective}
            placeholder="Add a description about yourself"
            onChange={objectiveChangeHandler}
          />
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GeneralForm;
