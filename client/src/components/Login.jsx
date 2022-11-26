import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = (e) => {
    e.preventDefault();
    if (user === "hetarth") {
      if (password === "hello") {
        sessionStorage.setItem("user", user);
        window.location = "/dashboard";
      } else{
        console.log('Incorrect details');
      }
    } else{
      console.log('Incorrect details');
    }
  };
  return (
    <div>
      <form onSubmit={login}>
        <input onChange={handleUser}></input>
        <input type="password" onChange={handlePassword}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Login;
