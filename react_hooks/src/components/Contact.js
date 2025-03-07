import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const user = useContext(AppContext);
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h1>contact</h1>
      <p>phone:{user.phone}</p>
      <h1>name :{user.name}</h1>
    </div>
  );
};

export default Contact;
