import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Log out</button>
      <span>{user.email}</span>
    </div>
  );
};

export default Home;
