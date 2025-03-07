import React, { useCallback, useState } from "react";
import Header from "./Header";

const Usecallback = () => {
  const [count, setCount] = useState(0);
  const newFn = useCallback(() => {}, []);
  return (
    <div>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default Usecallback;
