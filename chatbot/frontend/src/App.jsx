import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
