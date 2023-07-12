import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {

  const ctxNav = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxNav.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxNav.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxNav.isLoggedIn && (
          <li>
            <button onClick={ctxNav.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};

export default Navigation;
