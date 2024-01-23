import React from "react";
import Card from "../components/Card";

const Products = () => {
  return (
    <div className="py-10 flex flex-wrap bg-slate-800 justify-center gap-10 p-4 md:gap-10 lg:gap-x-10 lg:gap-y-10 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Products;
