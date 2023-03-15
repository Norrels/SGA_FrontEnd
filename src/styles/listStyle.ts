import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const ListContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;

  opacity: 0;
  animation: ${fadeIn} 1s 0.4s ease-in-out forwards;
`;

export const ListItemContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 80% 10%;
  justify-content: space-between;

  border-radius: 8px;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const ListInfoContent = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;

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
  width: 700px;

  h3 {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    max-width: 500px;
  }
`;

export const ItemIcon = styled.span`
  width: 3.125rem;
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3.125rem;

  background: ${(props) => props.theme["white-300"]};

  img {
    width: 100%;
    height: 100%;
    border-radius: 3.125rem;
  }
`;

export const InfoType = styled.div`
  width: 110px;
  height: 20px;
  padding: 5px;
  margin-left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  color: ${(props) => props.theme["white"]};

  border-radius: 1rem;
  background: ${(props) => props.theme["primary_300"]};
`;

const BUTTONS = {
  edit: "primary_300",
  delete: "blue-500",
} as const;

interface ButtonProps {
  buttonColor: keyof typeof BUTTONS;
}

export const ItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ItemButton = styled.div<ButtonProps>`
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
