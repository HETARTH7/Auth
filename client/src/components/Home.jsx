import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Home;
