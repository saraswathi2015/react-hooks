import React from "react";

const Dropdown = (props) => {
  console.log("dropdown", props);
  return (
    <div>
      {props.value && (
        <select
          onChange={(e) => props.onSelect(e.target.value)}
          placeholder="select"
        >
          <option value="">select</option>

          {props.value &&
            props.value.map((option) => {
              return (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default React.memo(Dropdown);
