import React, { createContext, useEffect, useState } from "react";

export const AughtContext = createContext();

const MainContext = ({ children }) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(login);
  },[]);
  
  const userValue = { displayName: "Akash" };
  const contextValues = { user: userValue, login, setLogin };
  return (
    <AughtContext.Provider value={contextValues}>
      {children}
    </AughtContext.Provider>
  );
};

export default MainContext;
