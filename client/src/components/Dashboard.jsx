import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const Dashboard = () => {
  const { auth } = useAuth();
  const getData = async () => {
    try {
      const response = await axios.get("/user", {
        headers: { authorization: "Bearer " + auth.accessToken },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={getData}>Get User Info</button>
    </div>
  );
};

export default Dashboard;
