import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Header,
  Navigation,
  UnorderedList,
  ListElement,
  Paragraph,
} from "../tailwind/TailwindNavigation";

const MainNavigation = () => {
  const [whenUserIsSignedOut, whenUserIsSignedIn] = useState(false);

  const removeLogout = () => {
    whenUserIsSignedOut(true);
  };

  const showLogout = () => {
    whenUserIsSignedIn(true);
  };

  return (
    <Header>
      <Link to="/home">
        <Paragraph>Home: Flickpic AI</Paragraph>
      </Link>
      <Navigation>
        <UnorderedList>
          <ListElement>
            <Link to="/">
              <Paragraph>Start Creating!</Paragraph>
            </Link>
          </ListElement>
          <ListElement>
            <Link to="/pricing">
              <Paragraph>Pricing</Paragraph>
            </Link>
          </ListElement>
          <ListElement>
            <Link to="/FAQ">
              <Paragraph>FAQ</Paragraph>
            </Link>
          </ListElement>
          <ListElement>
            <Link to="/BLOG">
              <Paragraph>BLOG</Paragraph>
            </Link>
          </ListElement>
          {whenUserIsSignedOut && (
            <ListElement>
              <Link to="/home" onClick={removeLogout}>
                <Paragraph>Logout</Paragraph>
              </Link>
            </ListElement>
          )}
          <Link to="/login" onClick={showLogout}>
            <Paragraph>Login</Paragraph>
          </Link>
        </UnorderedList>
      </Navigation>
    </Header>
  );
};

export default MainNavigation;
