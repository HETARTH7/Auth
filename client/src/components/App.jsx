import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Username from "./Username";
import Register from "./Register";
import Password from "./Password";
import Profile from "./Profile";
import Recovery from "./Recovery";
import Reset from "./Reset";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Username />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="reset" element={<Reset />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
