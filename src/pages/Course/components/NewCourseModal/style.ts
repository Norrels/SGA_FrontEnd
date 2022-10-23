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
  padding: 3rem 2rem 2rem 4rem;
  background: ${(props) => props.theme["white"]};

  width: 46.875rem;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    width: fit-content;
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

  form {
    width: 100%;
    height: 40rem;
    padding-right: 2.4rem;
    padding-left: 0.5rem;
    margin-top: 2rem;

    display: flex;
    overflow: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;

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

    label {
      font-weight: 800;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.5rem;
  right: 4.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const NewCourseModalInputs = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  input,
  select {
    width: 37.5rem;
    height: 5.313rem;
    padding-left: 1.25rem;

    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    font-weight: 800;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
    
  }
`;

export const NewCourseModalUnidadeCurricularContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 68% 28%;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    select,
    input {
      width: 100%;
      height: 5.313rem;
      padding-left: 1.25rem;

      border: none;
      box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      font-weight: 800;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const NewCourseModalButtonAddNewUnidadeCurricula = styled.button`
  padding: 0.8rem;
  background: transparent;

  border: 2px dashed ${(props) => props.theme["black"]};
  border-radius: 8px;

  p {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const NewCouseModalCreateButton = styled.button`
  width: 100%;

  height: 3.2rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-500"]};

  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme["white"]};
`;
