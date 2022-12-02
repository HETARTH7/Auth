import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [mssg, setMssg] = useState("");
  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    const user = { username, password };
    console.log(user);
    axios
      .post("http://localhost:5000/auth", user)
      .then((res) => setAuth(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (auth === "OK") {
      sessionStorage.setItem("user", username);
      window.location = "/dashboard";
    } else if (auth === "Wrong") {
      setMssg("Invalid. Please try again");
    }
  }, [username, auth]);
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
