import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./routes/Test";
import Homepage from "./routes/Homepage";

function Apps() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
    </Routes>
  )
}

export default Apps;
