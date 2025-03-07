import React, { useEffect, useState } from "react";

const Useeffect1 = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("setTimeout");
      setQuery(input);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
    // clearTimeout(value);
  }, [input]);

  useEffect(() => {
    if (query) {
      console.log("make query", query);
    }
  }, [query]);

  return (
    <div>
      <h1>debouncing</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{input}</h1>
    </div>
  );
};

export default Useeffect1;
