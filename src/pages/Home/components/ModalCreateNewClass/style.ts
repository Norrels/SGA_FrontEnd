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
  width: 46.875rem;

  //Hackerzinho para centralizar
  position: fixed;
  top: 50%;
  left: 50%;

  border-radius: 6px;
  padding: 3rem 2rem 4rem 4rem;
  background: ${(props) => props.theme["white"]};

  transform: translate(-50%, -50%);

  h2 {
    padding-left: 0.2rem;
    font-size: 2.5rem;
    width: fit-content;
    font-weight: 800;
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
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 3.5rem;
  right: 4.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};
`;

export const AvaliableModalContainer = styled.form`
  margin-top: 3rem;

  button {
    width: 100%;
    height: 3rem;
    margin-top: 2rem;

    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-500"]};

    font-size: 1.563rem;
    font-weight: 700;
    color: ${(props) => props.theme["white"]};
  }

  sup {
    font-size: 1.25rem;
    font-style: italic;
  }
`;

export const ModalCreateClassContent = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  height: 35rem;
  display: flex;
  overflow: auto;
  padding-right: 2.4rem;
  padding-left: 0.5rem;

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
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
  }

  button {
    padding: 1.5rem;

    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-500"]};

    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["white"]};
  }
`;

export const ModalCreateClassContentLine = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  select,
  input:not([type="checkbox"]) {
    width: 37.5rem;
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

export const ModalCreateClassDays = styled.article`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 2.5em;
    height: 2.5em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &:checked {
      background-color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const ModalCreateClassContentLines = styled.article`
  display: grid;
  grid-template-columns: 60% 35%;
  gap: 1.7rem;
`;

export const ModalCreateClassContentCollum = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  width: 100%;

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

export const ModalCreateClassSumarryContent = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 13.125rem;
  }

  div {
    width: 19.79rem;
    padding: 1.2rem 3rem;

    border: 1px solid rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h3 {
      text-align: center;
      margin-bottom: 1rem;
      font-weight: 700;
      color: ${(props) => props.theme["sub-title"]};
      font-size: 1.25rem;
    }

    p {
      font-weight: 600;
      color: ${(props) => props.theme["gray-600"]};
      font-size: 1rem;

      strong {
        color: ${(props) => props.theme["sub-title"]};
      }
    }
  }
`;
