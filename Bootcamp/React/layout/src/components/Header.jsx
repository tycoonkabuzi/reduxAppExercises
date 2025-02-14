import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.link === "/" || props.link === "/about" || props.link === "/contact"
      ? `#363636`
      : `white`};
`;
const Main = styled.div`
  background-color: ${(props) =>
    props.link === "/" || props.link === "/about" || props.link === "/contact"
      ? `#cfcfcf`
      : `black`};

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
const Status = styled.p`
  color: ${(props) =>
    props.link === "/" || props.link === "/about" || props.link === "/contact"
      ? `#363636`
      : `white`};
`;
const Header = () => {
  const location = useLocation();

  return (
    <Main link={location.pathname}>
      {location.pathname === "/" ||
      location.pathname === "/about" ||
      location.pathname === "/contact" ? (
        <>
          <OrderedList>
            <Element>
              <StyledLink link={location.pathname} to="/">
                Home
              </StyledLink>
            </Element>
            <Element>
              <StyledLink link={location.pathname} to="/about">
                About
              </StyledLink>
            </Element>
            <Element>
              <StyledLink link={location.pathname} to="/contact">
                Contact
              </StyledLink>
            </Element>
          </OrderedList>
        </>
      ) : (
        <>
          <OrderedList>
            <Element>
              <StyledLink to="/admin"> Dashboard</StyledLink>
            </Element>
            <Element>
              <StyledLink to="/admin/users"> Users</StyledLink>
            </Element>
            <Element>
              <StyledLink to="/admin/settings"> Settings</StyledLink>
            </Element>
          </OrderedList>
          <Status link={location.pathname}> Logged In as an Admin</Status>
        </>
      )}
    </Main>
  );
};
export default Header;
