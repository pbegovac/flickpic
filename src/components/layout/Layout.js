import MainNavigation from "../navigation/MainNavigation";

const Layout = ({ children }) => {
  return (
    <div className="bg-pantone">
      <MainNavigation />
      <main className="h-85">{children}</main>
    </div>
  );
};

export default Layout;
