import React from "react";

const ResetButton = () => {
  const style = {
    backgroundColor: "red",
    color: "while",
    padding: "3px",
  };
  return (
    <div>
      <button style={style}>Reset to default</button>
    </div>
  );
};
export default ResetButton;
