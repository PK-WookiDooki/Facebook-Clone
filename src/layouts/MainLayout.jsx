import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <section className=" min-h-screen bg-gray-900 flex flex-col overflow-x-hidden">
      {/* navbar here */}
      <Navbar />
      <main className="">
        <Outlet />
      </main>

      {/* footer here */}
    </section>
  );
};

export default MainLayout;
