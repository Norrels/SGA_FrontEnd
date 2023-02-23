import styled from "styled-components";

export const HeaderEditUserButton = styled.button`
  width: 100%;
  padding: 0.2rem 0.4rem;
  border: none;

  color: ${(props) => props.theme["black"]};
  font-weight: bold;
  font-size: 1.1rem;
  background: transparent;
  border-radius: 3px;
  z-index: 20px;

  transition: color, background-color 0.1s;

  display: flex;
  gap: 0.5rem;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["white"]};
  }
`;


