import styled from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";

export const ColorPickerMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 1.5rem 0;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  p {
    font-size: 0.8rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.6rem;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }

  span {
    display: block;
    background-color: ${(props) => props.theme["blue-500"]};
    height: 20px;
    width: 20px;
    border-radius: 5px;
  }
`;
