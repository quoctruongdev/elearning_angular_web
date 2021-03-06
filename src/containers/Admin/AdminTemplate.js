import React from "react";
import { Redirect, Route } from "react-router-dom";

function LayoutAdmin(props) {
  return <>{props.children}</>;
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}
