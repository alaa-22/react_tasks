import { Nav } from "./components/Nav";
import { Users } from "./components/User";
import { Contact } from "./components/Contcat";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserDetails } from "./pages/Userdetails";
export const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Redirect to="/users"></Redirect>
          </Route>
        </Switch>
      </div>
    </>
  );
};
