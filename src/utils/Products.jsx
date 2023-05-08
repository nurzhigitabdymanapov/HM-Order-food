import React from "react";
// import { Meals } from "../components/meals/Meals";
export const backdropElement = document.getElementById("backdrop");
export const modalElement = document.getElementById("modal");
export const product = [
  {
    id: 1,
    title: "Sushi",
    text: "Finest fish and veggies",
    price: 22.99,
    amount: "Amount",
  },
  {
    id: 2,
    title: "Schnitzel",
    text: "A german specialty!",
    price: 16.0,
    amount: "Amount",
  },
  {
    id: 3,
    title: "Barbecue Burger",
    text: "American, raw, meaty",
    price: 12.99,
    amount: "Amount",
  },
  {
    id: 4,
    title: "Green Bowl",
    text: "Healthy...and green...",
    price: 19.99,
    amount: "Amount",
  },
];
export const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Sushi",
    amount: 12,
    price: 22.99,
  },
  {
    id: 2,
    title: "Pizza",
    amount: 6,
    price: 16.99,
  },
  {
    id: 3,
    title: "Barbecue",
    amount: 4,
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    amount: 13,
    price: 19.99,
  },
];
// export const Products = () => {
//   return (
//     <div>
//       <Meals product={product} />
//     </div>
//   );
// };
