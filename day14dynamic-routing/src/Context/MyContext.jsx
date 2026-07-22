import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cart, SetCart] = useState([]);

  return (
    <MyStore.Provider value={{ productData, setProductData ,cart,SetCart}}>
      {children}
    </MyStore.Provider>
  );
};