import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const MenuBar = () => {
  const loginStyle = {
    backgroundColor: "#96e1f5",
    borderRadius: "5px",
    padding: "8px 18px",
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand text-bold" to="/home">
          True Traveller
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link ms-3" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-3" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-3" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-3" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-3" to="/dashboard">
                Dashboard
              </Link>
            </li>

            {loggedInUser.userName ? (
              <li className="nav-item">
                <Link className="nav-link ms-3">{loggedInUser.userName}</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/login" style={loginStyle}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
