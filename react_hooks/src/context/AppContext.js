import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ phone: " 1234567890", name: "yyyy" });

  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export default ContextProvider;
