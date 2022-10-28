import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const TeacherItemContainer = styled.article`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const TeacherItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const TeacherItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;

  background: ${(props) => props.theme["white-300"]};

  img {
    width: 100%;
  }
`;

export const TeacherItemInfoContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const ItemInfoContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TeacherInfoType = styled.div`
  width: 110px;
  height: 20px;
  padding: 5px;
  margin-left: 15px;

  /* trocar para flex para aparecer */
  display: none;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => props.theme["white"]};

  border-radius: 1rem;
  background: ${(props) => props.theme["blue-300"]};
`;

const BUTTONS = {
  edit: "blue-300",
  delete: "blue-500",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const TeacherItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TeacherItemButton = styled.div<ButtonProps>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  outline: none;

  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};
  cursor: pointer;

  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
