import React from "react";
import { useLogout } from "../hooks/useLogout";

const Home = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Home;
