import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Customhook = () => {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("id", "");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello , {id}!</h2>

      <input
        type="text"
        placeholder="Enter your id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h2>your id , {id}!</h2>
    </div>
  );
};

export default Customhook;
