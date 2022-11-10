import styled from "styled-components";
import * as ContextMenu from "@radix-ui/react-context-menu";

export const RightClickContainer = styled(ContextMenu.Content)`
  width: 12rem;
  padding: 0.625rem 0.75rem;
  background: ${(props) => props.theme["white"]};
  border-radius: 6px;

  font-weight: 800;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RightClickSeperator = styled(ContextMenu.Separator)`
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const RightClickItem = styled(ContextMenu.Item)`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
  transition: background-color, color 0.1s;
  color: ${(props) => props.theme["gray-700"]};

  button {
    border: none;
    background-color: transparent;
    transition: background-color, color 0.1s;

    font-size: 16px;
    font-weight: bolder;

    &:hover {
      background: ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme["white"]};
    }
  }
  
  &:hover {
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["white"]};
  }
`;
