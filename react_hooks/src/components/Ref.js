import React from "react";
import { useRef } from "react";

//useRef
// const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);

//   const handlePlus = () => {
//     setValue((value) => value + 1);
//   };
//   const handleMinus = () => {
//     setValue((value) => value - 1);
//   };

//   const count = useRef(10);
//   console.log(count);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <div className="App">
//       {/* <h1>count:{count}</h1> */}
//       {/* <button onClick={handleClick}>change count</button> */}
//       <h1>{value}</h1>
//       <button onClick={handlePlus}>+1</button>
//       <button onClick={handleMinus}>-1</button>
//       <h1>Render count : {count.current}</h1>
//     </div>
//   );
// }

const Ref = () => {
  const inputElem = useRef();

  const BtnClick = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };

  return (
    <div>
      <input type="text" ref={inputElem} />
      <button onClick={BtnClick}>Click here</button>
    </div>
  );
};

export default Ref;
