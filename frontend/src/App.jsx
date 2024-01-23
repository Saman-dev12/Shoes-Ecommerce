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
      { path: "/cart", element: <Cart /> },
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
