import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import ScrollToTop from "react-scroll-to-top";
import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import NoMatch from './Components/Shared/NoMatch/NoMatch';
import Reviews from './Components/Dashboard/Reviews/Reviews';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageService from './Components/Dashboard/ManageService/ManageService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            {/* <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute> */}
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/review">
              <Reviews />
            </Route>

            <Route path="/addService">
              <AddService />
            </Route>

            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>

            <Route path="/manageServices">
              <ManageService />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>

          </Switch>
        </Router>

        <ScrollToTop style={{ backgroundColor: '#12d0d9', padding: '5px' }} />

      </UserContext.Provider>
    </div>
  );
}

export default App;