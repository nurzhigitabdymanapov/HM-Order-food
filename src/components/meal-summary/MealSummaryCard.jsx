import React from "react";
import styled from "styled-components";

export const MealSummaryCard = () => {
  return (
    <DivContainer>
      <Container>
        <Text>Delicious Food, Delivered To You</Text>
        <Paragraph>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Paragraph>
        <Paragraph>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </Paragraph>
      </Container>
    </DivContainer>
  );
};
const Container = styled.div`
  max-width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: 310px;
  top: 358px;
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 10px;
`;
const Text = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #fff;
`;
const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
