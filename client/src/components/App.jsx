import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
const App = () => {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};
const Login = ({ setUser }) => {
  const handleChange = (e) => setUser(e.target.value);
  return (
    <div>
      <input onChange={handleChange}></input>
      <Link to="/dashboard">Submit</Link>
    </div>
  );
};

export default App;
