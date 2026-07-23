import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  console.log("Context Provider is rendering...");

  const [user, setUser] = useState([]);

  return (
    <MyStore.Provider value={{ user, setUser }}>
      {children}
    </MyStore.Provider>
  );
};