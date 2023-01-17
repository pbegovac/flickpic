import MainNavigation from "../navigation/MainNavigation";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-auto">
      <MainNavigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
