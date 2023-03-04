import styled, { keyframes } from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;
export const HomeSearchInputContainer = styled.section`
  margin-top: 5rem;

  opacity: 0;
  animation: ${fadeIn} 1s 0.2s ease-in-out forwards;
`;
export const HomeTextContentSearchInput = styled.h3`
  width: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;
export const HomeDownContentSearchInput = styled.div`
  input {
    width: 100%;
    height: 3.75rem;
    margin-top: 0.625rem;
    padding-left: 1.813rem;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
    color: ${(props) => props.theme["black"]};
    font-weight: 700;
    font-size: 1rem;
    &:placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["sub-title"]};
    }
  }
`;
export const HomeDownFilterContentSearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HomeSelectOptionSearch = styled.div`
  select {
    border-radius: 8px;
    width: 10rem;
    height: 2.5rem;
    padding-left: 1.313rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }
`;
export const HomeSelectFilterOptionSearch = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;
`;
const COLORS = {
  1: "black",
  2: "blue-400",
  3: "blue-500",
  4: "blue-600",
} as const;
interface ColorsProps {
  colorsColor: keyof typeof COLORS;
}

export const HomeUpContentSearchInput = styled.div`
  display: flex;
  gap: 1rem;
  button {
    border: none;
    background: transparent;

    svg {
      transition-duration: 0.3s;
      &:hover {
        color: ${(props) => props.theme["primary_300"]};
      }
    }
  }
`;

export const HomeCalenderBox = styled.div`
  position: relative;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    left: -10;
    top: -0;
  }

  input {
    opacity: 0;
    width: 2rem;
    height: 2rem;
    padding-top: 15px;

    font-size: 40px;

    position: absolute;
    right: 9;
    top: -0;
  }
`;

export const HomeSelectAndLegenda = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  gap: 1rem;
`;
