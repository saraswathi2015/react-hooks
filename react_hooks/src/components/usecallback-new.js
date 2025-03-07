import React, { useCallback, useState } from "react";
import Dropdown from "./Dropdown";

const Filter_Brand = [
  { id: 1, name: "B1" },
  { id: 2, name: "B2" },
  { id: 3, name: "B3" },
];
const filter_model = [
  { id: 1, name: "m1" },
  { id: 2, name: "m2" },
  { id: 3, name: "m3" },
];

const Filter = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  // useCallback(() => {}, []);

  const onSelectBrand = useCallback(
    (b) => {
      console.log(b);
      setBrand("b", b);
    },
    [brand]
  );

  const onSelectModel = useCallback(
    (m) => {
      console.log("m", m);
      setBrand(m);
    },
    [model]
  );

  return (
    <div>
      <div>
        <Dropdown value={Filter_Brand} onSelect={onSelectBrand} />
        <Dropdown value={filter_model} onSelect={onSelectModel} />
      </div>
      <div>
        <h1>Applied filter</h1>
        <p>brand:{brand}</p>
        <p>model:{model}</p>
      </div>
    </div>
  );
};

export default Filter;
