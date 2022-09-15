import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HomeContent = styled.div`
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
        return "linear-gradient(180deg, #25B5E9 0%, #5AADD1 100%);"
     } else if (props.theme[BUTTONS[props.buttonsColor]] == "#25B5E9") {
        return "linear-gradient(180deg, #5AADD1 0%, #367FBF 100%);"
     } else {
        return "linear-gradient(180deg, #367FBF 0%, #0031B0 100%);"
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

export const HomeList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const HomeSearchInput = styled.div`
  margin-top: 4.313rem;
`;

export const HomeTextContentSearchInput = styled.h3`
  padding: 5px;
`;

export const HomeUpContentSearchInput = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const HomeDownContentSearchInput = styled.div`
  input {
    width: 100%;
    margin-top: 0rem;
  }
`;

export const HomeDownFilterContentSearchInput = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const HomeSelectOptionSearch = styled.div`
  display: grid;

  select {
    border-radius: 8px;
    padding: 10px;

    font-weight: bold;
    border: none;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const HomeSelectFilterOptionSearch = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

  input {
    width: 20px;

    margin-top: 0;
    height: 10px;

    min-width: 20px;
    min-height: 20px;
    background-color: red;
  }

  :checked ~ input {
    background-color: ${(props) => props.theme["blue-200"]};
  }
`;

const COLORS = {
  1: "black",
  2: "blue-300",
  3: "blue-400",
  4: "blue-500",
} as const;

interface ColorsProps {
  colorsColor: keyof typeof COLORS;
}

export const InputCheckbox = styled.div<ColorsProps>`
  display: flex;
  align-items: center;
  margin-left: auto;
  accent-color: ${(props) => props.theme[COLORS[props.colorsColor]]};

  span {
    color: ${(props) => props.theme[COLORS[props.colorsColor]]};
    margin-left: 10px;
    font-weight: bold;
  }
`;
