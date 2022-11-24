import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes ({ loggedIn }) {
  return loggedIn ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
