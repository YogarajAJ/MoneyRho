import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import FileUpload from "./FileUpload";
import Home from "./Home";
import Login from "./Login";
import Protected from "./ProtectedRoute";
import Reports from "./Reports";

const NavRoutes = () => {
  const loggedIn = useSelector(({ login }) => login.loggedIn);

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/reports" exact element={<Reports />} />
      <Route
        path="/upload"
        exact
        element={
          <Protected condition={loggedIn}>
            <FileUpload />
          </Protected>
        }
      />
    </Routes>
  );
};

export default NavRoutes;
