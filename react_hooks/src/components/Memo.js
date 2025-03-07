import React, { useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(2);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculation done");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => {
    cubeNum(number);
  }, [number]);
  return (
    <div>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <h2> cube of the number : {result}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter++
      </button>
      <h2>counter : {counter}</h2>
    </div>
  );
};

export default Memo;
