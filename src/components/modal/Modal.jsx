import React from "react";
import styled from "styled-components";
import { backdropElement, modalElement } from "../../utils/Products";
import { createPortal } from "react-dom";
import { Basket } from "../basket/Basket";

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};
const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};
export const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, backdropElement)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalElement)}
    </>
  );
};
// const Container = styled.div`
//   background-color: #00000087;
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   top: 0;
//   width: 100%;
//   z-index: 3;
//   height: 100%;
// `;
// const ContainerSecond = styled.div`
//   width: 500px;
//   height: 200px;
//   background-color: #fff;
//   display: flex;
// `;
// const ModalSpan = styled.span`
//   width: 46px;
//   height: 36px;
//   display: inline-block;
//   text-align: center;
//   border: 1px solid #d6d6d6;
//   border-radius: 6px;
// `;
// const ModalPrice = styled.span`
//   width: 60px;
//   height: 27px;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 27px;
//   color: #ad5502;
//   display: inline-block;
// `;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
`;
const StyledModalContent = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
