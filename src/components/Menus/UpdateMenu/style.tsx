import styled, { keyframes } from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const UpdateMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  animation: ${fadeIn} 0.4s ease-in-out forwards;

  strong {
    font-weight: 600;
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue-600"]};
    font-size: 0.875rem;
  }
`;
