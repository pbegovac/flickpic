import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/FlickPic.png";
import LoginIcon from "./LoginIcon";

const MainNavigation = () => {
  const [whenUserIsSignedOut, whenUserIsSignedIn] = useState(false);

  const removeLogout = () => {
    whenUserIsSignedOut(true);
  };

  const showLogout = () => {
    whenUserIsSignedIn(true);
  };

  return (
    <header className="h-12 flex justify-around items-center">
      <Link to="/home" className="h-full flex justify-center items-center">
        <img
          src={logo}
          className="h-70 bg-center hover:opacity-60"
          alt="Flickpic logo"
        />
      </Link>
      <nav className="h-full w-30">
        <ul className="h-full w-full flex justify-between items-center">
          <li>
            <p className="paragraph">
              <Link to="/">Start Creating❗</Link>
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
        </ul>
      </nav>
      <div>
        <p className="paragraph">
          <Link to="/login" onClick={showLogout}>
            <LoginIcon />
          </Link>
        </p>
      </div>
    </header>
  );
};

export default MainNavigation;
