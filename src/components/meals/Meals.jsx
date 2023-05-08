import React from "react";
import styled from "styled-components";

import { product } from "../../utils/Products";
import { MealItem } from "./mealItem/MealItem";

export const Meals = () => {
  return (
    <ConstainerSecondMeals>
      {product.map((meal) => {
        return (
          <MealsItem>
            <MealItem key={meal.id} meal={meal} />
          </MealsItem>
        );
      })}
    </ConstainerSecondMeals>
  );
};

const ConstainerSecondMeals = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 250px;
  padding:20px 40px;
`;
const MealsItem = styled.div`
  width: 100%;
`;
