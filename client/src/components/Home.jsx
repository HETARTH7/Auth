import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Auth</h1>
      <Link to={"/login"} className="btn btn-success m-5">
        Login
      </Link>
      <Link to={"/register"} className="btn btn-success m-5">
        Register
      </Link>
    </div>
  );
};

export default Home;
