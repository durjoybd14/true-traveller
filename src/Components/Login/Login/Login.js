import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.Config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { userName: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                localStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-3"></div>
                <div className="p-5 shadow col-md-6">
                    {/* <h5>Please Login</h5> */}
                    {/* <form>
                        <div className="mt-3 form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <button className="px-4 mt-3 button">Login</button>
                    </form> */}
                    <div className="text-center from-group">
                        {/* <h5 className="text-muted">Or</h5> */}
                        <button className="button" onClick={handleGoogleSignIn}><i className="fa fa-google" aria-hidden="true"></i> Continue with Google</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Login;