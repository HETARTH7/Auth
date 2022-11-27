import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [mssg, setMssg] = useState("");
  const errormssg = "Invalid Details. Please try again";
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const login = (e) => {
    e.preventDefault();
    try {
      if (!auth) throw errormssg;
    } catch (err) {
      setMssg(err);
    }
  };
  return (
    <div>
      <form onSubmit={login}>
        <input onChange={handleUser}></input>
        <input type="password" onChange={handlePassword}></input>
        <input type="submit"></input>
      </form>
      <p id="mssg">{mssg}</p>
    </div>
  );
};

export default Login;
