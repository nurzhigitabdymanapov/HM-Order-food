import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/iccons/Vector.svg";
import { cartContext } from "../../store/cart-context";

export const Busket = ({ children, onToggle }) => {
  const {animation,totalAmount} = useContext(cartContext);
  

  return (
    <Button onClick={onToggle} className={animation}>
      <BasketIcon />
      <BusketTitle>{children}</BusketTitle>
      <BusketCount>{totalAmount}</BusketCount>
    </Button>
  );
};
const Button = styled.button`
  width: 249px;
  height: 59px;
  background-color: #5a1f08;
  border-radius: 30px;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #4d1601;
  }
  &.bump {
    animation: bump 300ms ease-out;
  }
  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const BusketTitle = styled.span`
  width: 78px;
  height: 24px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 16px;
  margin: 0 13px;
`;
const BusketCount = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
`;
