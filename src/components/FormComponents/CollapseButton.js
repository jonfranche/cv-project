import React, { useState } from "react";

const CollapseButton = () => {
  let [hidden, setHidden] = useState(false);

  const buttonHandler = () => {
    hidden ? setHidden(false) : setHidden(true);
  };

  return <button onClick={buttonHandler}>{hidden ? "Show" : "Hide"}</button>;
};

export default CollapseButton;
