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

export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: center;

  animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavBar = styled.nav`
  width: 80%;

  display: flex;
  justify-content: space-evenly;

  a,
  p {
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;

    position: relative;

    transition-duration: 0.4s;

    &::before {
      content: "";
      width: 0;
      height: 4px;

      position: absolute;
      top: 25px;

      background-color: ${(props) => props.theme["blue-300"]};

      transition-duration: 0.4s;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }

    &.active {
      color: ${(props) => props.theme["blue-300"]};

      &:hover {
        &::before {
          width: 0;
        }
      }
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
`;

export const HeaderUser = styled.span`
  color: ${(props) => props.theme["black"]};
  font-weight: bold;
  font-size: 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  button {
    border: none;

    display: flex;
    align-items: center;
  }

  svg {
    transition-duration: 0.2s;
    margin-left: 0.9rem;
    &:hover {
      color: ${(props) => props.theme["blue-300"]} !important;
    }
  }
`;

export const HeaderNavMenu = styled(Menubar.Menu)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  svg {
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  :has(a.active) {
    svg {
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const HeaderNavMenuArrow = styled.span`
  width: 100%;
  margin-top: -1.4rem;
  margin-left: -0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["white"]} !important;
    &:hover {
      color: ${(props) => props.theme["white"]} !important;
    }
  }
`;

export const HeaderNavMenuContent = styled(Menubar.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 0.2rem 0.6rem 0.6rem 0.6rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  opacity: 0;
  animation: ${fadeIn} 0.4s ease-in-out forwards;

  a {
    &.active {
      border-bottom: unset;
      color: unset;
    }
  }
`;

export const HeaderNavMenuItem = styled(Menubar.Item)`
  width: 100%;

  display: flex;
  border-radius: 4px;

  cursor: pointer;
  transition: color, background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme["blue-500"]};
  }

  a {
    width: 100%;
    max-width: 100%;
    padding: 4px;

    transition: color, background-color 0.1s;

    &:hover {
      &::before {
        width: 0;
      }
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const HeaderEditUserButton = styled.button`
  width: 100%;
  padding: 0.2rem 0.4rem;

  color: ${(props) => props.theme["black"]};
  font-weight: bold;
  font-size: 1.25rem;
  background: transparent;
  border-radius: 3px;

  transition: color, background-color 0.1s;

  display: flex;
  gap: 0.5rem;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["white"]};
  }
`;

export const HeaderNavGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  :has(a.active) {
    svg {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  button {
    border: none;
    display: flex;
  }
`;
