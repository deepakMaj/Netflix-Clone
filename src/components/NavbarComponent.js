import React, { useContext } from 'react';
import logo from './static/logo.png';
import userLogo from './static/user.png';
import { Redirect } from 'react-router-dom';
import { signInWithGoogle, signOut } from '../firebase';
import UserContext from '../context/UserContext';

const NavbarComponent = () => {

  const userContext = useContext(UserContext);
  const { user, clearUser } = userContext;

  const signInWithGoogleClick = () => {
    signInWithGoogle();
    if (user !== null) {
      return <Redirect to={{ pathname: '/watch' }} />
    }
  }

  const signOutClick = () => {
    signOut();
    clearUser();
  }

  return (
    <div className="navbar">
      <div className="container flex">
        <div>
          <img src={logo} alt="NETFLIX" className="navbar-logo" />
        </div>
        {user === null ?
          <div>
            <button className="navbar-signInBtn" onClick={signInWithGoogleClick}>Sign In</button>
          </div>
          :
          <div className="logo flex">
            <div className="flex">
              <img src={userLogo} alt={user.displayName} title={user.displayName} className="user-logo" />
            </div>
            <div>
              <button className="navbar-signInBtn" onClick={signOutClick}>Sign Out</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default NavbarComponent;
