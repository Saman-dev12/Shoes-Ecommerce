import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";

const cartItems = [
  {
    id: 1,
    name: "Stylish Sneakers",
    image: "/img1.jpeg",
    category: "Footwear",
    price: 50.0,
    quantity: 2,
  },
  {
    id: 2,
    name: "Casual Sandals",
    image: "/img2.jpeg",
    category: "Footwear",
    price: 30.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Running Shoes",
    image: "/img3.jpeg",
    category: "Footwear",
    price: 65.0,
    quantity: 3,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    exact: true,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart cartItems={cartItems} /> },
      { path: "/signin", element: <Login /> },
      { path: "/register", element: <Signup /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
