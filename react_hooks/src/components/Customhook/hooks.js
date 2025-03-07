import React, { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    //getting data from localstorage
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    //setting data in localstorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
};

export default useLocalStorage;
