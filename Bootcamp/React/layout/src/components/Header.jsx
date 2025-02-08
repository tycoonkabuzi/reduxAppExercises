import styled from "styled-components";
const Header = () => {
  const Main = styled.div`
    background-color: #cfcfcf;
    margin: 0;
    padding: 20px;
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
  return (
    <Main>
      <OrderedList>
        <Element>Home </Element>
        <Element>About </Element>
        <Element>Contact </Element>
      </OrderedList>
    </Main>
  );
};
export default Header;
