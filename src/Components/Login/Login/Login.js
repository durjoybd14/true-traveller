import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { useAuth } from "../../../contexts/Authcontext";
import signin from "../../../images/signin.png";

const Login = () => {
  const { googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = async () => {
    await googleSignIn();
    history.replace(from);
  };

  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-3"></div>
        <div className="p-5 bg-white rounded shadow col-md-6">
          <img src={signin} alt="signin" style={{ maxWidth: "100%" }} />
          <div className="mt-3 text-center from-group">
            <button className="button" onClick={handleGoogleSignIn}>
              <i className="fa fa-google" aria-hidden="true"></i> Continue with
              Google
            </button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
