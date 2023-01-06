import { Route, Routes } from "react-router-dom";
import StartCreating from "./pages/StartCreating";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Layout from "./components/layout/Layout";
import Blog from "./pages/BLOG";
import Home from "./pages/Home";

import "./index.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/" exact element={<StartCreating />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/FAQ" exact element={<FAQ />} />
        <Route path="/Blog" exact element={<Blog />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
