 import { createContext } from "react";


 // cosumer //

 export const MyStore = createContext();

 // provider //

 export const ContextProvider = ({ children }) => {
    console.log (" context provider is rendring..");
     const [count, setCount] = useState(0)


return (
    <MyStore.Provider value={{ count,setCount }}>{ children }</MyStore.Provider>
);
    
};