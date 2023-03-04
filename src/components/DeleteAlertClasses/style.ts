import styled, { keyframes } from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

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

export const Overlay = styled(AlertDialog.Overlay)`
  width: 100w;
  height: 100w;

  position: fixed;
  inset: 0;
  z-index: 90;

  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

export const Content = styled(AlertDialog.Content)`
  width: 600px;
  padding: 3.75rem 2.344rem 3rem 2.344rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  border-radius: 20px;
  background: ${(props) => props.theme["white"]};
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

  opacity: 0;
  animation: ${swipeTop} 0.5s ease-in-out forwards;
`;

export const DescriptionAlert = styled(AlertDialog.Description)`
  text-align: justify;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 1.5rem;

  button {
    height: 3rem;
    width: 7.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    background-color: rgb(255, 229, 229);
    color: rgb(205, 43, 4);

    &:first-child {
      background-color: rgba(219, 233, 245, 1);
      color: rgba(54, 127, 191, 1);
    }

    transition-duration: 0.3s;

    &:hover {
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  }
`;
