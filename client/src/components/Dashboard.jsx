import React from "react";

const Dashboard = () => {
  const username=sessionStorage.getItem("user");
    return <div>WELCOME {username}</div>;
};

export default Dashboard;
