import styled, { keyframes } from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";
import * as RadioGroup from '@radix-ui/react-radio-group';

interface ColourPicker {
  color: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const ColorPickerMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 1.5rem 0.8rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  animation: ${fadeIn} 0.4s ease-in-out forwards;

  p {
    font-size: 0.8rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.6rem;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }

  span {
    display: block;
    background-color: ${(props) => props.color};
    height: 20px;
    width: 20px;
    border-radius: 5px;
  }
`;

export const ColorPickerContainer = styled(RadioGroup.Item)<ColourPicker>`
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px var(--blackA7);

 
`;

export const CheckboxIndicator = styled(RadioGroup.Indicator)`
  color: ${(props) => props.theme["white"]};

  display: flex !important;
  align-items: center;
  justify-content: center;
`;
