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

export const AvaliableModalOptionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const AvaliableModalOptionsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  span {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;

    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-700"]};
    }
  }

  select,
  input {
    width: 17.5rem;
    height: 4.688rem;
    padding-left: 0.8rem;

    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);

    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const AvaliableModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
`;

export const AvaliableModalDivider = styled.span`
  margin-top: 0.6rem;
  
  font-size: 0.938rem;
  font-weight: 500;
  color: ${(props) => props.theme["gray-700"]};

  display: flex;
  justify-content: center;
`;
