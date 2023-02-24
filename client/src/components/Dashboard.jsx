import React from "react";
import { Link, useParams } from "react-router-dom";

const Dashboard = () => {
  const username = useParams();
  return (
    <div>
      WELCOME {username.user}
      <Link onClick={() => sessionStorage.clear()} to={"/"}>
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
