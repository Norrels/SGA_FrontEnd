import styled from "styled-components";

export const AdminItemContainer = styled.div`
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


export const AdminItemInfoContentName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AdminItemInfoContent = styled.div`
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

export const AdminItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(props) => props.theme["white-300"]};
`;

const BUTTONS = {
  edit: "blue-200",
  delete: "blue-400",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const AdminItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const AdminItemButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.2rem;

  background: #367fbf;
  border-radius: 8px;

  background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
