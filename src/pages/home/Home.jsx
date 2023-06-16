import React from "react";
import { HContent, HLSB, HRSB } from "../../components";

const Home = () => {
  return (
    <section className="flex justify-between w-full gap-10 overflow-x-hidden ">
      <HLSB />
      <HContent />
      <HRSB />
    </section>
  );
};

export default Home;
