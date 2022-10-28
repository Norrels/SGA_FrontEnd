import styled, { keyframes } from "styled-components";

const load = keyframes`
  20% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  80% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }

  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
`;

export const Load = styled.div`
  width: 270px;
  height: 270px;
  margin: 240px auto 0 auto;

  position: absolute;

  z-index: 1;

  img {
    width: 100%;
  }

  opacity: 0;
  transform: scale(0.5);
  animation: ${load} 2s ease-in-out forwards;
`;


export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const HomeContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BUTTONS = {
  1: "black",
  2: "blue-300",
  3: "blue-400",
} as const;

interface ButtonsProps {
  buttonsColor: keyof typeof BUTTONS;
}

export const HomeButtonCreate = styled.div<ButtonsProps>`
  button {
    background: ${(props) => {
      if (props.theme[BUTTONS[props.buttonsColor]] == "#000") {
        return "linear-gradient(180deg, #25B5E9 0%, #5AADD1 100%);";
      } else if (props.theme[BUTTONS[props.buttonsColor]] == "#25B5E9") {
        return "linear-gradient(180deg, #5AADD1 0%, #367FBF 100%);";
      } else {
        return "linear-gradient(180deg, #367FBF 0%, #0031B0 100%);";
      }
    }};
  }
`;

export const HomeButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border-radius: 8px;
    border: none;

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

export const HomeTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(
      90deg,
      #0f62ab 40.94%,
      #0031b0 40.94%,
      #25b5e9 58.61%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;







