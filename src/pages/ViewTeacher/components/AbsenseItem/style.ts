import styled from "styled-components";

export const AbsenseItemContainer = styled.article`
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

export const AbsenseItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const AbsenseItemInfoContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const AbsenseItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(props) => props.theme["white-300"]};
`;

const BUTTONS = {
  edit: "blue-300",
  delete: "blue-500",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const AbsenseItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const AbsenseItemButton = styled.div<ButtonProps>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  cursor: pointer;

  border-radius: 8px;
  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};
`;
