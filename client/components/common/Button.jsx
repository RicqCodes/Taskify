import styled, { css } from "styled-components";

import { color, device } from "@/styles/utils.styled";

const Button = ({
  children,
  variant,
  fullWidth,
  disabled,
  noBack,
  radius,
  ...props
}) => {
  return (
    <>
      <ButtonCon
        $variant={variant}
        $fullWidth={fullWidth}
        $radius={radius}
        {...props}
        $disabled={disabled}
      >
        {children}
        {noBack ? null : <ButtonBack $variant={variant}></ButtonBack>}
      </ButtonCon>
    </>
  );
};

export default Button;

const ButtonCon = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 12px 24px 12px 24px;
  font-size: 16px;
  font-weight: 400;
  border-radius: ${({ $radius }) => ($radius ? "8px" : 0)};
  transition: ease-out 0.3s;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  min-height: 40px;
  z-index: 1;
  min-width: 120px;
  margin-bottom: 5px;

  ${({ $variant }) => {
    switch ($variant) {
      case "grey":
        return css`
          background: ${() => color("tertiary", "main")};
          color: ${() => color("tertiary", 900)};
        `;
      case "red":
        return css`
          background: ${() => color("secondary", 900)};
          color: ${() => color("tertiary", "main")};
        `;
      default:
        return css`
          background: ${() => color("primary", "main")};
          color: ${() => color("tertiary", "900")};
        `;
    }
  }}
`;

const ButtonBack = styled.div`
  position: absolute;
  width: 100%;
  padding: 12px 24px 12px 24px;
  top: 0px;
  height: 100%;
  right: 0px;
  transition: ease-in-out 0.1s;

  &:hover,
  &:active,
  &:focus {
    ${() => device.up("md")} {
      top: 5px;
      right: -5px;
      transition: ease-in-out 0.3s;
    }
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "grey":
        return css`
          border: 1px solid ${() => color("tertiary", "main")};
        `;
      case "red":
        return css`
          border: 1px solid ${() => color("secondary", 900)};
        `;
      default:
        return css`
          border: 1px solid ${() => color("primary", "main")};
        `;
    }
  }}
`;
