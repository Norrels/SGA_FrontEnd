import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';

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

export const HomeSearchInput = styled.section`
  margin-top: 5.188rem;
  margin-bottom: 3.188rem;
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
    height: 3.75rem;
    margin-top: 0.625rem;
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

export const HomeDownFilterContentSearchInput = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const HomeSelectOptionSearch = styled.div`
  select {
    border-radius: 8px;
    width: 12.5rem;
    height: 2.5rem;
    padding-left: 1.313rem;

    font-weight: 600;
    font-size: 1rem;
    border: none;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const HomeSelectFilterOptionSearch = styled.div`
  display: flex;
  gap: 1.875rem;
  align-items: center;
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
  gap: 0.875rem;

  input {
    width: 100%;
    min-width: 1.688rem;
    min-height: 1.688rem;

    border: none;

    accent-color: ${(props) => props.theme[COLORS[props.colorsColor]]};
  }

  span {
    color: ${(props) => props.theme[COLORS[props.colorsColor]]};

    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const HomeCalenderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HomeCalenderHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  padding-top: 1rem;
  padding-bottom: 1rem;
  top: 0;

  background: ${(props) => props.theme["background"]};
`;

export const HomeCalenderOrderBy = styled.span`
  width: 15rem;

  background: ${(props) => props.theme["white-400"]};
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    background: linear-gradient(180deg, #25b5e9 45.83%, #367fbf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const HomeCalenderHeaderDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 6.6rem);
  flex-direction: row;
  gap: 1.25rem;
`;

export const HomeCalenderDay = styled.span`
  height: 6rem;
  background: ${(props) => props.theme["white-400"]};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 9px;
  gap: 0.563rem;

  strong {
    background: linear-gradient(180deg, #25b5e9 45.83%, #367fbf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    font-weight: 600;
    font-size: 2rem;
  }

  p {
    font-weight: 700;
    font-size: 0.75rem;
  }
`;

export const HomeCalenderContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomePlaces = styled.span`
  width: 15rem;
  height: 10.3rem;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.theme["blue-500"]};

    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const HomeClassesContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(7, 6.6rem);
  flex-direction: row;
  gap: 1.25rem;
`;

const PERIOD = {
  morning: "blue-400",
  afternoon: "blue-500",
  night: "blue-600",
} as const;

interface ClassProps {
  period: keyof typeof PERIOD;
}

export const HomeClasses = styled.div`
  height: 10.3rem;
  background: rgba(255, 255, 255, 0.5);

  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    &:first-child {
      div {
        border-radius: 8px 8px 0px 0px;
      }
    }

     &:last-child {
      div {
        border-radius: 0px 0px 8px 8px;
      }
     
    }
  }


`;

export const HomeClass = styled.div<ClassProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0;

  background-color: ${(props) => props.theme[PERIOD[props.period]]};
  color: ${(props) => props.theme["white"]};


  &:not(:has(p)) {
    background: transparent;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const HomeDivider = styled.span`
  opacity: 0.2;
  background-color: ${(props) => props.theme["gray-700"]};
  display: block;
  height: 1px;
  width: 100%;
  z-index: -1;
`;

export const HomeCheckBox = styled(Checkbox.Root)`
  background-color: ${(props) => props.theme["white"]};
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: 8px;
`

export const HomeCheckBoxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`
