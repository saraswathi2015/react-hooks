import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [name, setName] = useState(
    localStorage.getItem(key) ? localStorage.getItem(key) : ""
  );
  useEffect(() => {
    localStorage.setItem(key, name);
  }, [name, key]);

  return [name, setName];
};

export default useLocalStorage;
