import styled from "styled-components";

export const TeacherItemContainer = styled.article`
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

export const TeacherItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const TeacherItemInfoContent = styled.span`
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

export const TeacherItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TeacherItemButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
