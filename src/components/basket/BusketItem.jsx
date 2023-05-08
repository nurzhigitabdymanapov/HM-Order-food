import React, { useContext } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { cartContext } from "../../store/cart-context";
export const BusketItem = ({ title, price, amount,id }) => {
  const {increment,decrement} = useContext(cartContext)

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        <InpormationBlock>
          <p>${price}</p>
          <span>x{amount}</span>
        </InpormationBlock>
        <ButtonBlock>
          <Button onClick={()=>decrement(id)} borderRadius="squared" variant="outline">
            -
          </Button>
          <Button onClick={()=>increment(id)} borderRadius="squared" variant="outline">
            +
          </Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 2px solid #d6d6d6;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;
const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBlock = styled.aside`
  display: flex;
  gap: 15px;
`;
const InpormationBlock = styled.article`
  display: flex;
  width: 155px;
  justify-content: space-between;
  align-items: center;
  p {
    width: 60px;
    height: 27px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ad5502;
  }
  span {
    width: 46px;
    height: 36px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
