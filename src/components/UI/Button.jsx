import React from "react";
import styled from "styled-components";
import { getBackgroundColor } from "../../utils/Helpers";
import { getBorderRadius } from "../../utils/Helpers";
import { getColor } from "../../utils/Helpers";
import { getBorder } from "../../utils/Helpers";
export const Button = ({
  color = "container",
  borderRadius = "rounder",
  variant = "container",
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <MyButton
      color={color}
      borderRadius={borderRadius}
      variant={variant}
      onClick={onClick}
      {...props}>
      {icon}
      {children}
    </MyButton>
  );
};
const MyButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  color: ${getColor};
  border: ${getBorder};
  font-weight: 700;
  font-size: 14px;
  padding: 10px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  :hover {
    background: #7e2a0a;
    color: #fff;
    svg {
      fill: ${getColor};
    }
  }
  :active {
    background: #993108;
  }
  :disabled {
    background: #cac6c4;
    color: #fff;
  }
  svg {
    fill: ${getColor};
  }
`;
