import React from "react";
// import { Routes, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn }) {

 return loggedIn ? <Outlet /> : <Navigate to="/signin" />
}


// const ProtectedRoute = ({ component: Component, ...props }) => {
//   return (
//     <Routes>
//       {props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" />}
//     </Routes>
//   );
// };

export default ProtectedRoute;
