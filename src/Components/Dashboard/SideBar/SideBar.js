import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/Authcontext";
import "./SideBar.css";

const SideBar = () => {
  const { currentUser, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://mighty-cliffs-97551.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: currentUser?.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <aside className="py-3">
      <ul>
        {!isAdmin ? (
          <div>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>{" "}
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="fa fa-cart-plus" aria-hidden="true"></i>{" "}
              <Link className="link" to="/book">
                Book
              </Link>
            </li>
            <li>
              <i className="fa fa-book" aria-hidden="true"></i>{" "}
              <Link className="link" to="/booking">
                Booking List
              </Link>
            </li>
            <li>
              <i className="fa fa-star" aria-hidden="true"></i>{" "}
              <Link className="link" to="/review">
                Review
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>{" "}
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
              <Link className="link" to="/orderList">
                Order List
              </Link>
            </li>
            <li>
              <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
              <Link className="link" to="/addService">
                Add Service
              </Link>
            </li>
            <li>
              <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
              <Link className="link" to="/makeAdmin">
                Make Admin
              </Link>
            </li>
            <li>
              <i className="fa fa-windows" aria-hidden="true"></i>{" "}
              <Link className="link" to="/manageServices">
                Manage Services
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div className="p-4 mt-5" onClick={logout}>
        <h6 className="text-white link">
          <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
          <Link to="/">Logout</Link>
        </h6>
      </div>
    </aside>
  );
};

export default SideBar;
