import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./MenuBurger";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;

const StyledBurger = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: absolute;
  right: 20px;
  z-index: 60;
  cursor: pointer;
  div {
    width: 28px;
    height: 3px;
    margin-top: 6px;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1.5px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
