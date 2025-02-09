import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
const Main = styled.div`
  background-color: #cfcfcf;
  margin: 0;
  padding: 20px;
  display: flex;
`;
const OrderedList = styled.ol`
  display: flex;
  gap: 100px;
  width: 20%;
  margin: auto;
`;
const Element = styled.li`
  list-style: none;
  &:hover {
    color: #b8823b;
    font-weight: 700;
  }
`;
const Status = styled.p``;
const Header = () => {
  const location = useLocation();

  return (
    <Main>
      {location.pathname === "/" ||
      location.pathname === "/about" ||
      location.pathname === "/contact" ? (
        <>
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
        </>
      ) : (
        <>
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
          <Status> Logged In as an Admin</Status>
        </>
      )}
    </Main>
  );
};
export default Header;
