import React from "react";

const General = (props) => {
  const generalInfo = props.generalInfo;
  return (
    <div>
      <h2>{generalInfo.name}</h2>
      <div>
        <span>{generalInfo.city} </span>
        <span>{generalInfo.phone} </span>
        <span>{generalInfo.email}</span>
      </div>
      <div>
        <span>{generalInfo.objective}</span>
      </div>
    </div>
  );
};

export default General;
