import { useAuth } from "../contexts/Authcontext";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props}></Component>}</Route>
  ) : (
    <Redirect to="/" />
  );
}
