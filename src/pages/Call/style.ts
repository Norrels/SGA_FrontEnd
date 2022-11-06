import styled, { keyframes } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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

  a {
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;

    &.active {
      border-bottom: 4px solid ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  p {
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;

    &.active {
      border-bottom: 4px solid ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["blue-300"]};
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
`;

export const HeaderNavMenu = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
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

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["white"]} !important;
  }
`;

export const HeaderNavMenuContent = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 0.2rem 0.6rem 0.6rem 0.6rem;
  border-radius: 8px;
  margin-top: 1rem;

  a {
    &.active {
      border-bottom: unset;
      color: unset;
    }
  }
`;

export const HeaderNavMenuItem = styled(DropdownMenu.Item)`
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
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const CallContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CallContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    height: 3.75rem;
    margin-top: 4.313rem;
    padding-left: 1.813rem;

    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    color: ${(props) => props.theme["black"]};
    font-weight: 700;
    font-size: 1rem;

    &:placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["sub-title"]};
    }
  }
`;

export const CallButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
export const CallTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h1 {
    background: linear-gradient(
      90deg,
      #0f62ab 41.74%,
      #0031b0 41.74%,
      #25b5e9 58.75%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    color: ${(props) => props.theme["blue-500"]};
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const CallList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
