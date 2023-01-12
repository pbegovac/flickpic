import { Link } from "react-router-dom";
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
    <header className="h-1/6 shadow-md w-header opacity-80 bg-gradient-to-r from-green  to-blue flex justify-around items-center">
      <Link to="/home">
        <p className="paragraph">Home: Flickpic AI</p>
      </Link>
      <nav className="h-full flex items-center">
        <ul className="h-full w-700 flex justify-between items-center">
          <li>
            <p className="paragraph">
              <Link to="/">Start Creating!</Link>
            </p>
          </li>
          <li>
            <p className="paragraph">
              <Link to="/pricing">Pricing</Link>
            </p>
          </li>
          <li>
            <p className="paragraph">
              <Link to="/FAQ">FAQ</Link>
            </p>
          </li>

          <li>
            <p className="paragraph">
              <Link to="/BLOG">BLOG</Link>
            </p>
          </li>
          {whenUserIsSignedOut && (
            <li>
              <p className="paragraph">
                <Link to="/home" onClick={removeLogout}>
                  Logout
                </Link>
              </p>
            </li>
          )}
          <p className="paragraph">
            <Link to="/login" onClick={showLogout}>
              Login
            </Link>
          </p>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
