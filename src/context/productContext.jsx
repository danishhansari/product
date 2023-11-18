import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState("");
  const getProducts = async() => {
    const res = await axios.get("./data.json")
    setData(await res.data)
    console.log(data)
  }
  useEffect(() =>{
    getProducts()
  },[])
  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(ProductContext);
};
export { ProductContext, ProductProvider, useProductContext };
