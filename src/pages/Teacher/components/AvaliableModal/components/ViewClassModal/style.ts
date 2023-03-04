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
      ${(props) => props.theme["primary_300"]} 99.8%
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
      color: ${(props) => props.theme["primary_300"]};
    }
  }

  svg {
    transition-duration: 0.3s;
    &:hover {
      color: ${(props) => props.theme["primary_300"]};
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

export const InputScroll = styled.div`
  width: 712px;
  max-height: 600px;
  padding: 0 2.344rem 1rem 4.688rem;

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

const DISABLED = {
  disabled: {
    display: "none",
    cor: "background",
    color: "gray-600",
  },
  on: {
    display: "block",
    cor: "white",
    color: "gray-700",
  },
} as const;

interface DisabledProps {
  disabled: keyof typeof DISABLED;
}

export const InputContent = styled.div<DisabledProps>`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  gap: 0.625rem;

  &:not(:nth-child(1), :nth-child(2), :nth-child(3), :nth-child(6)) {
    flex-direction: row;
  }

  label {
    font-weight: 800;
    font-size: 1.25rem;
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

    color: ${(props) => props.theme[DISABLED[props.disabled].color]};
    pointer-events: ${(props) => [DISABLED[props.disabled].display]};
    background-color: ${(props) => props.theme[DISABLED[props.disabled].cor]};
  }
  p {
    color: #8d0000;
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
  }
`;
