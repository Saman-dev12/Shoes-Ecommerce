import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import VideoBackground from "./VideoBackground";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <VideoBackground /> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
