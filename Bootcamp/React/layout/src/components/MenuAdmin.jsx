import styled from "styled-components";
const MenuAdmin = () => {
  const Main = styled.div`
    width: 20%;
    background-color: blue;
    height: 100%;
  `;
  const OrderedList = styled.ul`
    background-color: red;
  `;
  const Element = styled.li`
    list-style: none;
  `;
  return (
    <Main>
      <OrderedList>
        <Element></Element>
      </OrderedList>
    </Main>
  );
};
export default MenuAdmin;
