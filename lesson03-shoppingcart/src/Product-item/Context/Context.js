import React, { createContext, useState, useContext } from "react";

const ContextItems = createContext();
const Context = (Props) => {
  const [Contain, setContain] = useState([]);
  const value = {
    Contain,
    setContain,
  };
  return (
    <ContextItems.Provider value={value} {...Props}></ContextItems.Provider>
  );
};

export { Context, ContextItems };
