import styled from "styled-components";

export const AbsenseItemContainer = styled.article`
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
`;

export const AbsenseItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
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

export const AbsenseInfoType = styled.div`
  width: 100px;
  height: 20px;
  padding: 5px;
  
  display: flex;
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
  border-radius: 8px;
  outline: none;
  
  cursor: pointer;
  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};

  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
