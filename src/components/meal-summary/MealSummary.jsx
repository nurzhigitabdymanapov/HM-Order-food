import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/summaryImage.png";
import { MealSummaryCard } from "./MealSummaryCard";

export const MealSummary = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
      <MealSummaryCard />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 432px;
`;
