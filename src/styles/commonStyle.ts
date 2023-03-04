import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const MainContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchInput = styled.input`
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

  opacity: 0;
  animation: ${fadeIn} 1s 0.2s ease-in-out forwards;
`;

export const HeadingContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const TitleContainer = styled.section`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  h1 {
    width: 100%;
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme["blue-800"]} 40.94%,
      ${(props) => props.theme["primary_300"]} 58.61%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    text-align: center;
  }

  p {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};

    text-align: center;
  }
`;

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

export const Toggle = styled.div`
  width: 100%;
  margin: 20px 0;
  /* padding: 0 10px; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  gap: 10px;

  opacity: 0;
  animation: ${fadeIn} 1s 0.2s ease-in-out forwards;

  label {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input {
    width: 50px;
    height: 25px;
    margin: 0;

    position: relative;

    appearance: none;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 50px;
    box-shadow: inset 0px 0px 16px 1px rgba(0, 0, 0, 0.24);

    cursor: pointer;
    transition-duration: 0.6s;

    &:checked {
      background-color: ${(props) => props.theme["primary_300"]};
    }
  }

  input:before {
    content: "";
    width: 25px;
    height: 25px;

    background-color: ${(props) => props.theme["white"]};
    border-radius: 50px;
    box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);

    position: absolute;
    top: 0;
    left: 0;

    transition-duration: 0.3s;
  }

  input:checked:before {
    left: 25px;
  }
`;
