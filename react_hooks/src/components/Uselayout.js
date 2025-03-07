import React, { useEffect, useLayoutEffect } from "react";

const Uselayout = () => {
  useEffect(() => {
    console.log("usseffect");
  }, []);
  useLayoutEffect(() => {
    console.log("uselayout");
  }, []);
  return (
    <div>
      <h2>Test message</h2>
      {Array(40000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
};

export default Uselayout;
