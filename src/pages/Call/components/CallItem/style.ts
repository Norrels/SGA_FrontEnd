import styled from "styled-components";

export const CallItemContainer = styled.div`
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

export const CallItemInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;

  img,
  svg {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  span {
    font-weight: bold;
  }
`;

export const CallItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(props) => props.theme["white-300"]};
`;

export const CallInfoType = styled.div`
  font-size: 0.8rem;
  width: 100px;
  padding: 5px;

  background: #25b5e9;
  text-align: center;
  border-radius: 1rem;
  font-weight: bold;
`;

export const CallDescription = styled.div``;

const BUTTONS = {
  edit: "blue-200",
  delete: "blue-400",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const CallItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const CallItemButton = styled.div<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: #25b5e9;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CallItemButton2 = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: #367fbf;

  display: flex;
  align-items: center;
  justify-content: center;
`;
