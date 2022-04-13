import React, { useState } from "react";

const SkillsForm = (props) => {
  const [newSkill, setNewSkill] = useState("");
  const skills = props.skills;

  const newSkillChangeHandler = (event) => {
    setNewSkill(event.target.value);
  };

  const deleteButtonHandler = (event) => {
    props.onDeleteSkill(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveSkills(newSkill);
    setNewSkill("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Skills: </label>
        <input
          type="text"
          value={newSkill}
          name={newSkill}
          onChange={newSkillChangeHandler}
        ></input>
        <button type="submit">Add Skill</button>
      </form>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
            <button value={skill} onClick={deleteButtonHandler}>
              Delete Skill
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsForm;
