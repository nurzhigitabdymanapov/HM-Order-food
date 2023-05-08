import styled from "styled-components";
import { Busket } from "./Busket";

export const Header = ({ onToggle }) => {
  
  return (
    <Container >
      <h1>React Meals</h1>
      <Busket onToggle={onToggle} >Your Cart</Busket>
    </Container>
  );
};

const Container = styled.header`
  height: 101px;
  width: 100%;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  color: #fff;
  position:fixed ;
  z-index: 5;


`;
