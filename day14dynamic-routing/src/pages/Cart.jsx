import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { MyStore } from "../context/MyContext";
import { useContext } from "react";
import CardUi from '../component/CardUi';
import { useParams } from "react-router";

const Cart = () => {

  let { productData, setProductData } = useContext(MyStore);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };
  const { cart } = useContext(MyStore);
let { id } = useParams();

  useEffect(() => {
    getProductsData();
  }, []);

   return(
      <div className="p-2 grid grid-cols-4 gap-4">
        {productData.map((val) => {
          return <CardUi key={val.id} product={val} />;
        })}
      </div>
    );
  };
  
  export default Cart;
