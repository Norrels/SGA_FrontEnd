import styled from "styled-components";

export const PlacesItemContainer = styled.article`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;

  border-radius: 8px;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlacesItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(props) => props.theme["white-300"]};
`;

export const PlacesItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const PlacesItemInfoContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BUTTONS = {
  edit: "blue-200",
  delete: "blue-400",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const PlacesItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const PlacesItemButton = styled.div<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
  }
`;
