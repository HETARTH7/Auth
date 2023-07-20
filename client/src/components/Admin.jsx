import React from "react";
import useAuth from "../hooks/useAuth";

const Admin = () => {
  const { auth } = useAuth();
  console.log(auth);
  return <div>Admin</div>;
};

export default Admin;
