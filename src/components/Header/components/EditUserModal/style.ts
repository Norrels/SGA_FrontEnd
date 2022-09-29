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

  padding: 3.75rem 5.688rem;
  background: ${(props) => props.theme["white"]};

  width: 750px;
  transform: translate(-50%, -50%);

  h2 {
    width: fit-content;

    font-size: 2.5rem;
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

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    article {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    input:not([type="checkbox"]) {
      /* width: 37.5rem; */
      height: 5.313rem;
      width: 100%;
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

    button {
      height: 4rem;

      border: none;
      border-radius: 8px;
      background: ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme["white"]};

      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 4rem;
  right: 4rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const EditUserModalDuoContainer = styled.div`
  display: flex;
  gap: 1rem;

  div {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    :first-child {
      width: 60%;
    }
  }
`;