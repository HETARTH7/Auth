import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var accessToken;
    await axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => console.log(accessToken = res.data.accessToken))
      .catch((err) => console.log(err));
    setAuth({ username, password, accessToken });
    setUsername("");
    setPassword("");
    navigate(from, { replace: true });
  };

  return (
    <div className="container mx-auto bg-zinc-200">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-5 rounded-xl">
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello there</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src="/user.png" alt="" width={140}></img>
            </div>
            <div className="textbox flex flex-col item-center gap-6">
              <input
                className="h-10"
                onChange={userChange}
                type="text"
                placeholder="Username"
              />
              <input
                className="h-10"
                onChange={passwordChange}
                type="text"
                placeholder="Username"
              />
              <button className="bg-indigo-500 rounded-xl h-12" type="submit">
                <Link to="/profile">Login</Link>
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                Not a member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
