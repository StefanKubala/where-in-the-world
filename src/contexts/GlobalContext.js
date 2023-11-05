import React, { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};
