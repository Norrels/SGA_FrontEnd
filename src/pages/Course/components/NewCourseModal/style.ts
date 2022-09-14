import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  width: 100w;
  height: 100w;

  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;

  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["white"]};

  transform: translate(-50%, -50%);

  h2 {
    color: ${(props) => props.theme["blue-600"]};
  }
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.5rem;
  right: 2rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};
`;

export const NewModalContainer = styled.form`
  margin-top: 3rem;

  button {
    width: 100%;
    height: 3rem;
    margin-top: 2rem;

    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-500"]};

    font-weight: 700;
    color: ${(props) => props.theme["white"]};
  }

  sup {
    font-style: italic;
  }
`;

export const NewModalOptionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-bottom: 1rem;
`;

export const NewModalOptionsContent = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;

  span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-size: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-700"]};
    }
  }

  select,
  input {
    height: 3rem;
    padding-left: 0.8rem;

    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);

    font-weight: 600;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const NewModalContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

export const NewModalDivider = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.theme["gray-700"]};

  display: flex;
  justify-content: center;
`;

export const NewModalTypeContainerButton  = styled.div`

`;

const BUTTONS = {
    edit: "blue-200",
    delete: "blue-400",
  } as const;
  
  interface ButtonProps {
    buttonColor: keyof typeof BUTTONS;
  }

export const TypeCourseButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 8px;
    padding: 0.2rem;
  
    background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};
  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NewModalUnityOptionsContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 70% 30%;
`