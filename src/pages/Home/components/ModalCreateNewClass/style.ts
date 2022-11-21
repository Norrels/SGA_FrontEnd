import * as Dialog from "@radix-ui/react-dialog";
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

const swipeTop = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  } 
`;

const swipeLeft = keyframes`
to {
  transform: translateX(-712px);
} 
`;

export const Overlay = styled(Dialog.Overlay)`
  width: 100w;
  height: 100w;

  position: fixed;
  inset: 0;
  z-index: 2;

  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

export const Content = styled(Dialog.Content)`
  width: 750px;
  padding: 3.75rem 2.344rem 3.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;

  border-radius: 20px;
  background: ${(props) => props.theme["white"]};
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

  opacity: 0;
  animation: ${swipeTop} 0.5s ease-in-out forwards;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 0 2.344rem 0 4.688rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 800;
    font-size: 40px;
    background: linear-gradient(
      90deg,
      #0f62ab -2.99%,
      #0031b0 -2.98%,
      #25b5e9 99.8%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HeaderButtons = styled.div`
  button {
    background: none;
    border: none;
    margin-left: 20px;
    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  svg {
    transition-duration: 0.3s;
    &:hover {
      color: ${(props) => props.theme["blue-300"]};
      cursor: pointer;
    }
  }
`;

export const InputMain = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const InputOverflow = styled.div`
  width: fit-content;

  display: flex;
  align-items: top;
  justify-content: space-between;
`;

interface StepProps {
  step: number;
}

export const InputScroll = styled.div<StepProps>`
  width: 712px;
  max-height: 600px;
  padding: 0 2.344rem 1rem 4.688rem;
  transform: ${(props) => {
    if (props.step == 1) {
      return "translateX(-712px)";
    } else if (props.step == 2) {
      return "translateX(-1424px)";
    } else
      return "translateX(0px)"
  }};

  overflow-y: auto;

  transition-duration: 0.5s;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  gap: 0.625rem;

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  span {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input,
  select {
    height: 5.313rem;
    padding: 1.25rem;

    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};

    transition-duration: 0.15s;

    // ver isso aqui, ta meio travado no opera, verificar se no google vai estar dahora
    &:focus {
      box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }

    &:disabled {
      opacity: 30%;
      background-color: ${(props) => props.theme["white"]};
    }
  }
  p {
    color: #8d0000;
  }
`;

export const Steps = styled.div`
  width: 100%;
  height: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 32%;
    height: 100%;
  }
`;

export const InputIndividual = styled.div`
  width: 360px;
  &:last-child {
    width: 210px;
  }
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.625rem;

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input {
    height: 5.313rem;
    padding: 1.25rem;

    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};

    &:disabled {
      opacity: 30%;
      background-color: ${(props) => props.theme["white"]};
    }
  }
`;

export const ChecksContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckIndividual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    margin-bottom: 5px;

    font-weight: 800;
    font-size: 20px;
    color: #6d6d6d;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color: white;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
  &[data-state="checked"] {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SummaryContainer = styled.div`
  width: 100%;
  padding:0 0 1.25rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const SummaryHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.375rem;
  }
`;

export const SummaryContent = styled.div`
  width: 100%;
  margin-top: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryDetails = styled.div`
  display: flex;
  flex-direction: column;

  text-transform: capitalize;

  &:first-child {
    text-align: left;
    align-items: left;

    font-weight: 700;
    font-size: 1.125rem;

    span {
      color: ${(props) => props.theme["blue-300"]};
    }

    p {
      color: ${(props) => props.theme["gray-700"]};
    }
  }

  &:last-child {
    text-align: right;
    align-items: right;

    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  justify-content: space-between;
  gap: 0.625rem;
`;

export const FinalButton = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 4.688rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.25rem;
    font-weight: bold;

    svg {
      margin-left: 10px;
    }

    &:disabled {
      opacity: .6;
    }
  }
`;
