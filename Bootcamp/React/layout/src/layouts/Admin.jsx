import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router";
const Admin = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/admin" ? <h1> Welcome Admin</h1> : <Outlet />}
      <Footer />
    </>
  );
};
export default Admin;
