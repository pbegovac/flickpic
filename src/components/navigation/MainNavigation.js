import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/FlickPic.png";
import LoginIcon from "./LoginIcon";

const MainNavigation = () => {
  const [showNavigation, setShowNavigation] = useState(true);

  const clickHandler = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <header className="flex items-center xs:flex-col xs:justify-start xs:h-70 lg:h-12 lg:flex-row lg:justify-around">
      <Link to="/home" className="h-full flex justify-center items-center">
        <img
          src={logo}
          className="hover:opacity-60 xs:h-12 xs:p-2 lg:h-full"
          alt="Flickpic logo"
        />
      </Link>
      <div onClick={clickHandler} className="cursor-pointer my-2 lg:hidden">
        <p>---</p>
      </div>
      {showNavigation && (
        <nav className="h-full  xs:w-full  lg:w-50">
          <ul className="h-full w-full flex justify-between items-center xs:flex-col lg:flex-row">
            <li className="list">
              <p className="paragraph">
                <Link to="/">Start Creating❗</Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/pricing">Pricing</Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/FAQ">FAQ</Link>
              </p>
            </li>
            <li className="list">
              <p className="paragraph">
                <Link to="/BLOG">BLOG</Link>
              </p>
            </li>
          </ul>
        </nav>
      )}
      {showNavigation && (
        <div className=" xs:p-2 lg:p-0">
          <Link to="/login">
            <LoginIcon />
          </Link>
        </div>
      )}
    </header>
  );
};

export default MainNavigation;
