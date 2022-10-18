import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

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
  return (
    <Link to="/dashboard" onClick={() => setUser("bob")}>
      Submit
    </Link>
  );
};

const Dashboard = ({ user }) => {
  return <div>Hello {user}!</div>;
};
export default App;
