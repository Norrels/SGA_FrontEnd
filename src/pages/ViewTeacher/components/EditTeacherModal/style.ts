import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";

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
  width: 750px;
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
  button {
    background: none;
    border: none;
    margin-left: 20px;
    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const InputScroll = styled.div`
  width: 100%;
  max-height: 600px;
  padding: 0 2.344rem 1rem 4.688rem;

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
  justify-content: left;
  flex-direction: column;
  gap: 0.625rem ;

  &:not(:nth-child(1), :nth-child(2)) {
    flex-direction: row;
    gap: 1.25rem;
    input[type="number"] {
      width: 15rem !important;
    }

    input[type="file"] {
      width: 21.25rem !important;
    }
  }

  &:not(:nth-child(1), :nth-child(2), :nth-child(3)) {
    align-items: center;
    justify-content: space-between;

    select {
      width: 22.5rem;
      color: ${(props) => props.theme[DISABLED[props.disabled].color]};
      pointer-events: ${(props) => [DISABLED[props.disabled].display]};
      background-color: ${(props) => props.theme[DISABLED[props.disabled].cor]};

      &:focus {
        box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
      }
    }

    div {
      &:last-child {
        width: 13.125rem;
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      transition-duration: 0.3s;

      &:hover {
        color: ${(props) => props.theme["blue-300"]};
        cursor: pointer;
      }
    }
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
    color: ${(props) => props.theme["gray-700"]};

    transition-duration: 0.15s;

    // ver isso aqui, ta meio travado no opera, verificar se no google vai estar dahora
    &:focus:not(:read-only) {
      box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  }

  input {
    &:read-only {
      background-color: #efefef;
      color: rgba(109, 109, 109, 0.5);
      &::placeholder {
        color: rgba(109, 109, 109, 0.5);
      }
    }
  }
  p {
    color: #8d0000;
  }

  img {
    height: 5rem;
    width: 5rem;
    border-radius: 8px;
  }
`;

export const InputIndividual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.625rem;

  opacity: 0;
  animation: ${fadeIn} 0.4s ease-in-out forwards;

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

    &:read-only {
      background-color: #efefef;
      color: rgba(109, 109, 109, 0.5);
      &::placeholder {
        color: rgba(109, 109, 109, 0.5);
      }
    }
  }

  input[type="file"] {
    width: 100%;
    opacity: 0;
  }

  p {
    color: ${(props) => props.theme["blue-300"]};
  }
`;

export const InputFile = styled.div<DisabledProps>`
  width: 100%;
  position: relative;

  input {
    pointer-events: ${(props) => [DISABLED[props.disabled].display]};
  }
`;

export const InputFileContent = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;

  border: none;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: transparent;

  div {
    width: 100px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-500"]};
  }

  svg {
    color: ${(props) => props.theme["white"]};
  }

  span {
    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

/* export const ContentSelect = styled.div`
  width: 60%;

  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerInputStar = styled.div`
  display: flex !important;
`;

export const InputContentDupo = styled.div`
  display: flex;

  div {
    margin-top: 30px;

    display: flex;
    flex-direction: column;

    // padding: 10px;

    gap: 1rem;
  }

  div label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
  }

  justify-content: space-around;

  input:not([type="file"]) {
    height: 5.313rem;
    padding-left: 1.25rem;

    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input:not([type="text"]) {
    width: 100%;
    height: 5.313rem;
    padding-left: 1.25rem;

    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
  select,
  input {
    height: 5.313rem;
    padding-left: 1.25rem;

    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1.1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const ContainerNewCompt = styled.div`
  width: 100%;

  margin-top: 30px;
`;

export const NewCompt = styled.div`
  border: 1px dashed black;
  text-align: center;
  display: flex;
  justify-content: center;

  height: 75px;
  padding: 5px;

  cursor: pointer;

  div {
    cursor: pointer;
  }
`; */

export const TeacherPhotoInput = styled.div`
  width: 21.25rem !important;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  gap: 0.625rem;

  p {
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.theme["gray-500"]};
  }

  svg {
    transition-duration: 0.3s;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const TeacherPhotoInputImage = styled.div`
  width: 85px;
  height: 85px;

  img {
    width: 100%;
    height: 100%;

    display: block;
  }
`;

export const ButtonNewCompetencia = styled.button`
  width: 100%;
  padding: 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.625rem;

  outline: none;
  background: transparent;

  border: none;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='gray' stroke-width='4' stroke-dasharray='15 ' stroke-dashoffset='48' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;

  p {
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const FinalButton = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 4.688rem;

    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
