import React from "react";
// Here is where we are importing to the two main components we need from the React Router package.
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/user/:id" element={<Profile />} />
    </Routes>
  );
};

//Don't forget to export your newly create Router component
export default Router;
