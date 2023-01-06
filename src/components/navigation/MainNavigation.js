import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

const MainNavigation = () => {
  const [whenUserIsSignedOut, whenUserIsSignedIn] = useState(false);

  const removeLogout = () => {
    whenUserIsSignedOut(true);
  };

  const showLogout = () => {
    whenUserIsSignedIn(true);
  };

  return (
    <header className={classes.header}>
      <Link to="/home" className={classes.logo} />
      <nav className={classes.pagesLinks}>
        <ul className={classes.navList}>
          <li className={classes.listElement}>
            <Link to="/" className={classes.links}>
              Start Creating!
            </Link>
          </li>
          <li className={classes.listElement}>
            <Link to="/pricing" className={classes.links}>
              Pricing
            </Link>
          </li>
          <li className={classes.listElement}>
            <Link to="/FAQ" className={classes.links}>
              FAQ
            </Link>
          </li>
          <li className={classes.listElement}>
            <Link to="/BLOG" className={classes.links}>
              BLOG
            </Link>
          </li>
          {whenUserIsSignedOut && (
            <li className={classes.listElement}>
              <Link to="/home" className={classes.links} onClick={removeLogout}>
                Logout
              </Link>
            </li>
          )}
          <Link
            to="/login"
            className={classes.loginElement}
            onClick={showLogout}
          />
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
