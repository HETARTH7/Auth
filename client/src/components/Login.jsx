import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <form>
        <label>Username</label>
        <input placeholder="Enter your username"></input>
        <label>Passsword</label>
        <input type="password" placeholder="Enter your password"></input>
        <Link to={"/dashboard"}>Submit</Link>
      </form>
    </div>
  );
};

export default Login;
