import React from "react";
import { Route, Routes } from "react-router"; 
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/product" element={<Product />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/detail/:id" element={<ProductDetail />} />
    
       </Routes>
    </div>
  );
};

export default AppRoutes;
