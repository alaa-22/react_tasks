import { Route, Redirect } from "react-router-dom";
export const ProtectedRoute = ({ path, children }) => {
  const isLoggedIn = localStorage.getItem("token") === "12345";

  return isLoggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="/login" />
    </Route>
  );
};

export const Protectlog = ({ path, children }) => {
  const isLoggedIn = localStorage.getItem("token") === "12345";

  return isLoggedIn ? (
    <Route path="/login">
      <Redirect to="/users" />
    </Route>
  ) : (
    <Route path="/">
      <Route path={path}>{children}</Route>
    </Route>
  );
};
