import MainNavigation from "../navigation/MainNavigation";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <MainNavigation />
      <main className="h-screen">{children}</main>
    </div>
  );
};

export default Layout;
