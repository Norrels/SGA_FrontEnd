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
  z-index: 1000;

  position: fixed;
  top: 50%;
  left: 50%;

  border-radius: 6px;

  padding: 3.75rem 5.688rem;
  background: ${(props) => props.theme["white"]};

  width: 750px;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme["blue-500"]};
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

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const NoteButton = styled.div`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.5rem;
  right: 6rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const InputContainer = styled.div`
  margin-top: 50px;
`;

export const InputContentScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 40px;

  height: 200px;
  overflow-y: scroll;

  select,
  input:not([type="checkbox"]) {
    /* width: 37.5rem; */
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

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
  }

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

export const InputContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input:disabled {
    background-color: #d9d9d9;
    color: rgba(109, 109, 109, 0.5);
  }

  select:disabled {
    background-color: #d9d9d9;
    color: rgba(109, 109, 109, 0.5);
  }

  select,
  input:not([type="checkbox"]) {
    /* width: 37.5rem; */
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

  label {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const ContentSelect = styled.div`
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

  input:disabled {
    background-color: #d9d9d9;
    color: rgba(109, 109, 109, 0.5);
  }

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
`;

export const ContainerButtonCreate = styled.div`
  margin-top: 30px;

  button {
    width: 100%;
    height: 3.75rem;

    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
