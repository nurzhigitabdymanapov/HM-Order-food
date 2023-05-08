import { createContext, useEffect, useReducer, useState } from "react";

export const cartContext = createContext({
  items: [],
  totalAmount: 0,
});
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const isExist = state.find((item) => item.title === action.payload.title);
    if (!isExist) {
      return [...state, action.payload];
    }
    if (!state.length) {
      return [action.payload];
    }
    const updatedItem = state.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          amount: item.amount + action.payload.amount,
        };
      }
      return item;
    });
    return [...updatedItem];
  }
  if (action.type === "INCREMENT") {
    const updatedItem = state.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    return [...updatedItem];
  }
  if (action.type === "DECREMENT") {
    const updatedItem = state.map((item) => {
      if (item.id === action.payload && item.amount !== 0) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    return [...updatedItem];
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const amount = cartState.reduce((prev, current) => prev + current.amount, 0);

  const totalPrice = cartState.reduce(
    (prev, current) => prev + current.amount * current.price,
    0
  );

  const addItem = (item) => {
    dispatch({ type: "ADD", payload: item });
    setAnimation(!animation);
  };
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const add = setInterval(() => {
      setAnimation("bump");
    }, 0);
    return () => {
      clearInterval(add);
    };
  }, [animation]);

  const cartValue = {
    items: cartState,
    addItem,
    totalAmount: amount,
    totalPrice: totalPrice,
    increment,
    decrement,
    animation,
  };

  return (
    <cartContext.Provider value={cartValue}>{children}</cartContext.Provider>
  );
};
