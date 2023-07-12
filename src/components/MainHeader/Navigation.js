import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {

  const authCtx = useContext(AuthContext);      // App wise or Component wise Context object to manage our states and to manage the function that change the state. 
  //ctxNav = { isLoggedIn: isLoggedIn, onLogout: logoutHandler };     where, isLoggedIn = true/false & logoutHandler = true/false

  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};

export default Navigation;
