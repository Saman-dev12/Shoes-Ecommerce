import React from "react";
import Card from "../components/Card";

const DUMMY_DATA = {
  products: [
    {
      id: 1,
      name: "Classic Sneakers",
      brand: "Nike",
      price: 7499,
      image: "classic-sneakers.jpg",
      description: "Comfortable and stylish sneakers for everyday use.",
      category: "Sneakers",
    },
    {
      id: 2,
      name: "Running Shoes",
      brand: "Adidas",
      price: 9999,
      image: "running-shoes.jpg",
      description: "High-performance running shoes for all types of runners.",
      category: "Running",
    },
    {
      id: 3,
      name: "Casual Loafers",
      brand: "Sperry",
      price: 5999,
      image: "casual-loafers.jpg",
      description: "Stylish and comfortable loafers for a casual look.",
      category: "Loafers",
    },
    {
      id: 4,
      name: "Formal Dress Shoes",
      brand: "Cole Haan",
      price: 11199,
      image: "formal-dress-shoes.jpg",
      description: "Elegant dress shoes for formal occasions.",
      category: "Formal",
    },
    {
      id: 5,
      name: "Hiking Boots",
      brand: "Merrell",
      price: 8199,
      image: "hiking-boots.jpg",
      description:
        "Durable and comfortable hiking boots for outdoor adventures.",
      category: "Hiking",
    },
  ],
};

const Products = () => {
  return (
    <div className="py-10 flex flex-wrap bg-slate-800 justify-center gap-10 p-4 md:gap-10 lg:gap-x-10 lg:gap-y-10 ">
      {DUMMY_DATA.products.map((item, index) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Products;
