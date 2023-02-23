import styled from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";

export const UpdateMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 1.5rem;
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
    font-size: 1rem;
    font-weight: 500;
  }

  svg {
    color: ${(props) => props.theme["blue-600"]};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-600"]};
    font-size: 0.875rem;
  }
`;
