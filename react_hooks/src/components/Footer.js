import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const user = useContext(AppContext);
  console.log("user", user);
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h1>Footer</h1>
      <p>Phone:{user.phone}</p>
      <h2>name : {user.name}</h2>
    </div>
  );
};

export default Footer;
