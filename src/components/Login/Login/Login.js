import React, { useContext } from 'react';
import Google from '../../../images/google.png';
import Logo from '../../../images/Logo.svg'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { userContext } from './../../../App';


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
             storeAuthToken();
            console.log(token, user)
          })
          .catch((error) => {
            console.log(error.message)
          });
    }
      const storeAuthToken = () => {
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem("token", idToken);
            history.replace(from);
          })
          .catch(function (error) {
            // Handle error
          });
      };
    return (
        <div className="text-center">
            <img style={{height: '250px'}} src={Logo} alt=""/>
            <h3 className="fw-bold mb-3">Login With</h3>
            <button className="btn-white btn-lg border-1" onClick={handleGoogleSingIn}>
               <img style={{'margin-right': '15px'}} src={Google} alt=""/> 
               Continue with Google
            </button>
        </div>
    );
};

export default Login;