import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
const Main = styled.div`
  background-color: #1e0a6a;
  color: white;
  padding: 20px;
`;
const OrderedList = styled.ul`
  margin: auto;
  width: 30%;
`;
const Element = styled.li``;
const Copyright = styled.p`
  text-align: center;
`;
const Footer = () => {
  const location = useLocation();
  return (
    <Main>
      {location.pathname === "/" ||
      location.pathname === "/about" ||
      location.pathname === "/contact" ? (
        <OrderedList>
          <Element>
            <Link to="/"> Home</Link>
          </Element>
          <Element>
            <Link to="/about"> About</Link>
          </Element>
          <Element>
            <Link to="/contact"> Contact</Link>
          </Element>
        </OrderedList>
      ) : (
        <OrderedList>
          <Element>
            <Link to="/admin"> Dashboard</Link>
          </Element>
          <Element>
            <Link to="/admin/users"> Users</Link>
          </Element>
          <Element>
            <Link to="/admin/settings"> Settings</Link>
          </Element>
        </OrderedList>
      )}

      <Copyright>Copyright</Copyright>
    </Main>
  );
};
export default Footer;
