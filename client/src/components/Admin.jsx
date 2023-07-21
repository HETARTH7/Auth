import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const Admin = () => {
  const { auth } = useAuth();
  const getAdmin = async () => {
    try {
      const response = await axios.get("/admin", {
        headers: { authorization: "Bearer " + auth.accessToken },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={getAdmin}>Get Admin</button>
    </div>
  );
};

export default Admin;
