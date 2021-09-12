import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import ScrollToTop from "react-scroll-to-top";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import NoMatch from "./Components/Shared/NoMatch/NoMatch";
import Reviews from "./Components/Dashboard/Reviews/Reviews";
import AddService from "./Components/Dashboard/AddService/AddService";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageService from "./Components/Dashboard/ManageService/ManageService";
import Book from "./Components/Dashboard/Book/Book";
import BookList from "./Components/Dashboard/BookList/BookList";
import AllOrder from "./Components/Dashboard/AllOrder/AllOrder";
import { AuthProvider } from "./contexts/Authcontext";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";

export const statusContext = createContext();

function App() {
  const [status, setStatus] = useState("");

  return (
    <div className="App" style={{overflow:'hidden'}}>
      <AuthProvider>
        <statusContext.Provider value={[status, setStatus]}>
          <Router>
            <Switch>
              <Route exact path="/about" component={About} />

              <Route exact path="/contact" component={Contact} />

              <Route exact path="/blogs" component={Blogs} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              <PrivateRoute exact path="/book/:id" component={Book} />

              <PrivateRoute exact path="/book" component={Book} />

              <PrivateRoute exact path="/booking" component={BookList} />

              <PrivateRoute exact path="/orderList" component={AllOrder} />

              <PublicRoute exact path="/login" component={Login} />

              <PrivateRoute exact path="/review" component={Reviews} />

              <PrivateRoute exact path="/addService" component={AddService} />

              <PrivateRoute exact path="/makeAdmin" component={MakeAdmin} />

              <PrivateRoute
                exact
                path="/manageServices"
                component={ManageService}
              />

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>

          <ScrollToTop style={{ backgroundColor: "#12d0d9", padding: "5px" }} />
        </statusContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
