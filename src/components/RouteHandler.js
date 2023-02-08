import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ Children }) => {
  const handleStatus = () => {
    const access_token = JSON.parse(localStorage.getItem("accessToken"));
    if (access_token !== null) {
      return true;
    } else {
      return false;
    }
  };

  const loginStatus = handleStatus();

  return loginStatus ? <Navigate to="/dashboard" /> : <>{Children}</>;
};

export const PrivateRoute = ({ Children }) => {
  const handleStatus = () => {
    const access_token = JSON.parse(localStorage.getItem("accessToken"));
    if (access_token !== null) {
      return true;
    } else {
      return false;
    }
  };

  const loginStatus = handleStatus();

  return loginStatus ? <>{Children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
