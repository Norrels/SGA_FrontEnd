import styled from "styled-components";

export const HeadingButtonContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > button {
    &:first-child {
      background: linear-gradient(
        180deg,
        ${(props) => props.theme["primary_300"]} 0%,
        ${(props) => props.theme["blue-400"]} 100%
      ) !important;
    }

    &:nth-child(3) {
      background: linear-gradient(
        180deg,
        ${(props) => props.theme["blue-400"]} 0%,
        ${(props) => props.theme["blue-500"]} 100%
      );
    }

    &:last-child {
      background: linear-gradient(
        180deg,
        ${(props) => props.theme["blue-500"]} 0%,
        ${(props) => props.theme["blue-600"]} 100%
      );
    }
  }
`;

export const ButtonModal = styled.button`
  width: 12.5rem;
  height: 3.75rem;
  height: 3.75rem;
  margin: 0 1rem;

  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme["white"]};
  font-size: 1.125rem;
  font-weight: bold;

  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;