import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <section className=" min-h-screen bg-gray-900 flex flex-col ">
      {/* navbar here */}
      <Navbar />
      <main className="py-5 px-0 md:px-5 flex flex-1 ">
        <Outlet />
      </main>

      {/* footer here */}
    </section>
  );
};

export default MainLayout;
