import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
