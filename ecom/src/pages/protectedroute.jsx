import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = ({ user, loading, children }) => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {

    if (!user && !token && !loading) {
      navigate("/login");
    }

  }, [user, token, loading, navigate]);

  if (loading) return <p>Loading...</p>;

  return (user || token) ? children : null;
};