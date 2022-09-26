import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const HomeSearchInputContainer = styled.section`
  margin-top: 5.188rem;
  margin-bottom: 3.188rem;
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
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const HomeSelectOptionSearch = styled.div`
  select {
    border-radius: 8px;
    width: 12.5rem;
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
  2: "blue-300",
  3: "blue-400",
  4: "blue-500",
} as const;

interface ColorsProps {
  colorsColor: keyof typeof COLORS;
}

export const InputCheckbox = styled.div<ColorsProps>`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  input {
    width: 100%;
    min-width: 1.688rem;
    min-height: 1.688rem;

    border: none;

    accent-color: ${(props) => props.theme[COLORS[props.colorsColor]]};
  }

  span {
    color: ${(props) => props.theme[COLORS[props.colorsColor]]};

    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const HomeUpContentSearchInput = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 1rem;

  button {
    border: none;
  }
`;

export const HomeCheckBox = styled(Checkbox.Root)`
  background-color: ${(props) => props.theme["white"]};
  width: 1.75rem;
  height: 1.75rem;
  border: none;
`;

export const HomeCheckBoxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeCalenderBox = styled.div`
  position: relative;
  width: 2rem;
  cursor: pointer;
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
    width: 1rem;
    height: 2rem;
    position: absolute;
    right: 9;
    top: -0;
    cursor: pointer;
  }
`;
