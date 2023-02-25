import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/FlickPic.png";
import LoginIcon from "./LoginIcon";

const MainNavigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowNavigation(true);
    }
  }, []);

  const clickHandler = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <header className="flex items-center xs:flex-col xs:justify-start xs:h-70 lg:h-12 lg:flex-row lg:justify-around">
      <Link to="/home" className="h-full flex justify-center items-center">
        <img
          src={logo}
          className="xs:h-12 xs:p-2 lg:h-full"
          alt="Flickpic logo"
        />
      </Link>
      <div
        onClick={clickHandler}
        className="cursor-pointer my-2 lg:hidden space-y-2"
      >
        <div className="w-8 h-1 bg-themeBlue"></div>
        <div className="w-8 h-1 bg-themeRed"></div>
        <div className="w-8 h-1 bg-themeYellow"></div>
      </div>
      {showNavigation && (
        <nav className="h-full xs:w-full lg:w-50">
          <ul className="h-full w-full flex justify-between items-center xs:flex-col lg:flex-row">
            <li className="list">
              <p className="paragraph">
                <Link to="/" onClick={clickHandler}>
                  Start Creating❗
                </Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/pricing" onClick={clickHandler}>
                  LinkedIn
                </Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/FAQ" onClick={clickHandler}>
                  FAQ
                </Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/BLOG" onClick={clickHandler}>
                  BLOG
                </Link>
              </p>
            </li>
          </ul>
        </nav>
      )}
      {showNavigation && (
        <div className=" xs:p-2 lg:p-0">
          <Link to="/login" onClick={clickHandler}>
            <LoginIcon />
          </Link>
        </div>
      )}
    </header>
  );
};

export default MainNavigation;
