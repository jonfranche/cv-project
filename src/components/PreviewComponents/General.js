import React from "react";

const General = (props) => {
  const generalInfo = props.generalInfo;
  return (
    <div className="preview-general">
      <h2>{generalInfo.name}</h2>
      <div className="preview-general__info">
        <span>{generalInfo.city} </span>
        <span>{generalInfo.phone} </span>
        <span>{generalInfo.email}</span>
      </div>
      <div>
        <p>{generalInfo.objective}</p>
      </div>
    </div>
  );
};

export default General;
