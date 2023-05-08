import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";
import { cartContext } from "../../../store/cart-context";
export const MealItem = ({ meal }) => {
  const context = useContext(cartContext);

  const addProduct = (amount) => {
    console.log(amount);
    const data = {
      title: meal.title,
      text: meal.text,
      price: meal.price,
      amount: +amount,
      id: meal.id,
    };
    context.addItem(data);
  };
  return (
    <>
    <Container>
      <StyledMealItem>
        <h3>{meal.title}</h3>
        <p>{meal.text}</p>
        <span>${meal.price}</span>
      </StyledMealItem>
      <MealItemForm input={meal.id} onAdd={addProduct} />
    </Container>
    <Hr />
    </>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  `;
const Hr = styled.hr`
  border: 1px solid #d6d6d6; 
  margin: 20px 0;
`;

const StyledMealItem = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;
