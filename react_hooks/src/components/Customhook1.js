import React, { useEffect, useState } from "react";
import useInternetStatus from "./customhook2";

const Customhook1 = () => {
  const isOnline = useInternetStatus();

  return <div>{isOnline ? "connected to internet" : "you are offline"}</div>;
};

export default Customhook1;
