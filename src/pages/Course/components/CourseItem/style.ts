import styled from "styled-components";

export const CourseItemContainer = styled.div`
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

export const CourseItemInfoContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    img, svg {
        width: 40px;
        height: 40px;
        border-radius: 8px;
    }

    span {
        font-weight: bold;
    }

    h3 {
      margin-bottom: 0.2rem;
    }
`

export const CourseItemIcon = styled.span`
width: 3.125rem;
height:3.125rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;

background: ${(props) => props.theme["white-300"]};
`

export const CourseInfoType = styled.div`
    font-size: 0.800rem;
    width: 100px;
    padding: 5px;
    height: 20px;

    background: ${(props) => props.theme["blue-300"]};
    text-align: center;
    border-radius: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme["white"]};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const CourseDescription = styled.div``

const BUTTONS = {
    edit: "blue-300",
    delete: "blue-500",
  } as const;
  
  interface ButtonProps {
    buttonColor: keyof typeof BUTTONS;
  }
  
  export const CourseItemButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    button {
      border: none;
      border-radius: 8px;
    }
  `;
  
  export const CourseItemButton = styled.div<ButtonProps>`
    border: none;
    border-radius: 8px;
    padding: 0.2rem;
  
    background: ${(props) => props.theme[BUTTONS[props.buttonColor]]};
  
    display: flex;
    align-items: center;
    justify-content: center;
  `;