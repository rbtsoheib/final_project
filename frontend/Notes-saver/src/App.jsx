import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/Signup" exact element={<Signup />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  );
};

export default App;
