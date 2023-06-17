import React from "react";
import { HContent, HLSB, HRSB } from "../../components";

const Home = () => {
  return (
    <section className="flex justify-center lg:justify-between w-full min-h-screen ">
      <HLSB />
      <HContent />
      <HRSB />
    </section>
  );
};

export default Home;
