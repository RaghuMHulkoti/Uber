import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check token inside useEffect
    if (!token) {
      navigate('/login');
    }
  }, [navigate]); // Include navigate as a dependency

  return <>{children}</>;
};

export default UserProtectWrapper;
