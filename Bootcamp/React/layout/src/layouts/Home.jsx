import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" ? <h1> Welcome home</h1> : <Outlet />}

      <Footer />
    </>
  );
};
export default Home;
