import React from "react";
import { Route, Routes } from "react-router-dom";
import { MLayout } from "./layouts";
import { Gaming, Group, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MLayout />}>
        <Route index element={<Home />} />
        <Route path="group" element={<Group />} />
        <Route path="gaming" element={<Gaming />} />
      </Route>
    </Routes>
  );
};

export default App;
