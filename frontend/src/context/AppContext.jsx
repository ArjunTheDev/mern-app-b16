import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = (key, value) => {
    setData((preData) => ({ ...preData, [key]: value }));
  };

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
