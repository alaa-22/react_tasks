import { Route, Redirect, Switch } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { ProtectedRoute, Protectlog } from "./components/Protect";
export const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Protectlog path="/login">
            <Login />
          </Protectlog>
          <ProtectedRoute path="/users/:id">
            <UserDetails />
          </ProtectedRoute>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
