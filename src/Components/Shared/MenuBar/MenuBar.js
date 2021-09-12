import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/Authcontext";
const MenuBar = () => {
  const loginStyle = {
    backgroundColor: "#96e1f5",
    borderRadius: "5px",
    padding: "8px 18px",
  };
  const logoutStyle = {
    backgroundColor: "#ef553e",
    borderRadius: "5px",
    padding: "8px 18px",
    color: "white",
  };

  const { currentUser, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand text-bold" to="/">
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
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="flex mb-2 navbar-nav ms-auto mb-lg-0 align-items-center">
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

            {currentUser?.displayName ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link ms-3">
                    <img
                      src={currentUser.photoURL}
                      alt=""
                      title={`loggedin as ${currentUser.displayName}`}
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link ms-3"
                    style={logoutStyle}
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </>
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
