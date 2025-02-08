import styled from "styled-components";
const Footer = () => {
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
  return (
    <Main>
      <OrderedList>
        <Element>Home</Element>
        <Element>About</Element>
        <Element>Contact</Element>
      </OrderedList>
      <Copyright>Copyright</Copyright>
    </Main>
  );
};
export default Footer;
