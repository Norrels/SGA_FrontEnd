import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const Overlay = styled(Dialog.Overlay)`
  width: 100w;
  height: 100w;

  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const ModalCreateClassDays = styled.article`
  display: grid !important;
  grid-template-columns: repeat(7, 1fr) !important;

  span {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;

    input:checked {
      button {
        background-color: ${(props) => props.theme["black"]} !important;
      }
    }
  }
`;

export const HomeCheckBox = styled(Checkbox.Root)`
  background-color: ${(props) => props.theme["white"]};
  height: 2.125rem !important;
  width: 2.125rem !important;
  border: none !important;

  :checked {
    background-color: azure !important;
    accent-color: black !important;
  }

  border-radius: 999999px !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25) !important;
`;

export const HomeCheckBoxIndicator = styled(Checkbox.Indicator)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  :checked {
    background-color: azure !important;
    accent-color: black !important;
  }
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
  margin-top: 1rem;

  button {
    width: 100%;
    height: 3rem;
    margin-top: 1rem;

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

export const TableScroow = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  background: transparent;
  height: 150px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    position: absolute;
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

export const AdvancedTableContent = styled.main`
  display: flex;
  gap: 2.625rem;

  aside {
    width: 25%;
    border-radius: 8px;
    padding: 1.875rem 1.25rem;
    background-color: ${(props) => props.theme["white"]};
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

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
  }

  table {
    width: 100%;
    border-collapse: collapse;
    height: 50;
    border-radius: 8px;
  }

  tbody {
    height: 10px;
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }

  thead th {
    height: 4.063rem;
    position: sticky;
    top: 0;
    color: ${(props) => props.theme["white"]};

    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);

    &:first-child {
      border-radius: 8px 0px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 8px 0px 0px;
    }
  }

  tr {
    height: 3.438rem;

    background: ${(props) => props.theme["white"]};

    :nth-child(2n) {
      background: ${(props) => props.theme["white-200"]};
    }

    svg {
      cursor: pointer;
    }
  }

  td {
    vertical-align: middle;
    text-align: center;
    font-weight: 500;
  }
`;
