import React from "react";
import { Route, Routes } from "react-router-dom";
import { MLayout } from "./layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MLayout />}></Route>
    </Routes>
  );
};

export default App;
