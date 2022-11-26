import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const login = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", user);
    window.location = "/dashboard";
  };
  return (
    <div>
      <form onSubmit={login}>
        <input onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Login;
