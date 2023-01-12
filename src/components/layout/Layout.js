import MainNavigation from "../navigation/MainNavigation";

const Layout = (props) => {
  return (
    <div className="h-screen">
      <MainNavigation />
      <main className="h-5/6">{props.children}</main>
    </div>
  );
};

export default Layout;
