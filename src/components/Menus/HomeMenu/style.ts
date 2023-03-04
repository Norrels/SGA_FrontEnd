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

export const HeaderNavMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 0.8rem 0.6rem 0.6rem 0.8rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -0%);

  opacity: 0;
  animation: ${fadeIn} 0.4s ease-in-out forwards;

  a {
    &.active {
      border-bottom: unset;
      color: unset;
    }
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;

    position: relative;

    transition-duration: 0.2s;
  }
`;
