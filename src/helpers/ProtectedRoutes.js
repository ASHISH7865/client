import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restOfProps }) => {
  const isLoggedIn = true;
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoutes;
