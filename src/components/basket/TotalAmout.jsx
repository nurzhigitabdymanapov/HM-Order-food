import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
export const TotalAmout = ({ totalPrice, onClose, onOrder }) => {
  const isOrderButton =
    totalPrice > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrice = totalPrice.toFixed(2);
  return (
    <div>
      <ContentSecond>
        <ContentChildOne>
          <h3>Total Amount</h3>
          <span>${fixedPrice}</span>
        </ContentChildOne>
        <ContentChildTwo>
          <Button variant="none" onClick={onClose}>
            Close
          </Button>
          {isOrderButton}
        </ContentChildTwo>
      </ContentSecond>
    </div>
  );
};

const ContentSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContentChildOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  span {
    width: 89px;
    height: 33px;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #8a2b06;
    display: flex;
    justify-content: end;
  }
  h3 {
    width: 141px;
    height: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #222222;
  }
`;
const ContentChildTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 10px;
`;
