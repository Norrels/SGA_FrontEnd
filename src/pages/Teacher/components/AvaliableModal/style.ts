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

  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

export const Content = styled(Dialog.Content)`
  width: 66.25rem;
  padding: 3.75rem 2.344rem 3.75rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;

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
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  button {
    background: none;
    border: none;
    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};
    }

    svg {
      transition-duration: 0.3s;
      &:hover {
        color: ${(props) => props.theme["blue-300"]};
      }
    }
  }
`;

export const ButtonIndividual = styled.button`
  margin: 0 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  transition-duration: 0.3s;

  p {
    text-align: center;
    font-size: 12px;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["blue-300"]};
  }
`;

export const ContentScroll = styled.div`
  width: 100%;
  max-height: 600px;
  margin-top: 2.5rem;
  padding: 0 2.344rem 0 4.688rem;

  overflow-y: scroll;

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 255px;
  }
`;

export const InputContainer = styled.div`
  width: 37.5rem;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  gap: 1.875rem;
`;

export const InputContent = styled.div`
  width: 37.5rem;
  display: flex;
  justify-content: space-between;

  flex-direction: row;
`;

export const InputIndividual = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.625rem;

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input,
  select {
    height: 4.688rem;
    padding: 1.25rem;

    border: none;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};

    transition-duration: 0.2s;

    &:focus {
      box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.1);
      transform: translateY(-10px);
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const InputSeparator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  hr {
    width: 6.25rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  p {
    font-weight: 500;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
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

export const InfoBusca = styled.div`
  width: 100%;
  p {
    text-align: left;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;
`;

export const TableRow = styled.div`
  width: 100%;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;

  background: #fff;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  p {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    width: fit-content;
    margin: 0 auto;

    background-color: transparent;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
  }

  &:first-child {
    padding: 1.5rem;

    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 0px 0px;

    p {
      text-align: center;
      font-weight: 600;
      font-size: 20px;
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const AvailableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["gray-500"]};
    margin-bottom: 1.25rem;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    margin-bottom: 0.625rem;

    &:last-child {
      color: ${(props) => props.theme["blue-300"]};
      cursor: pointer;
      margin-bottom: 0;
    }
  }
`;

export const FinalButton = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 3.75rem;

    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
