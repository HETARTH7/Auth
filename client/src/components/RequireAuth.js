import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.username) navigate("/login");
  });
};

export default RequireAuth;
