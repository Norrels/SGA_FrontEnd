import styled from "styled-components";

export const HolidayItemContainer = styled.div`
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

export const HolidayItemInfoContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;

    img, svg {
        width: 40px;
        height: 40px;
        border-radius: 8px;
    }

    span {
        font-weight: bold;
    }
`

export const HolidayItemIcon = styled.span`
width: 3.125rem;
height:3.125rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;

background: ${(props) => props.theme["white-300"]};
`

export const HolidayInfoType = styled.div`
    font-size: 0.800rem;
    width: 100px;
    padding: 5px;

    background: ${(props) => props.theme["blue-200"]};
    text-align: center;
    border-radius: 1rem;
    font-weight: bold;
`

export const HolidayDescription = styled.div``

const BUTTONS = {
    edit: "blue-200",
    delete: "blue-400",
  } as const;
  
  interface ButtonProps {
    buttonColor: keyof typeof BUTTONS;
  }
  
  export const HolidayItemButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `;
  
  export const HolidayItemButton = styled.button<ButtonProps>`
    border: none;
    border-radius: 8px;
    padding: 0.2rem;
  
    background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};
  
    display: flex;
    align-items: center;
    justify-content: center;
  `;