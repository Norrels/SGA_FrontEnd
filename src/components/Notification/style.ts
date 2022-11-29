import styled from "styled-components";
import * as Toast from "@radix-ui/react-toast";

export const NotificationContainer = styled(Toast.Root)`
  background-color: white;
  border-radius: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 30px 20px;

  display: grid;
  grid-template-areas: "tagImage title action" "tagImage description action";
  column-gap: 25px;
  row-gap: 0.1rem;
  align-items: center;
  z-index: 100;
  

  div {
    &:first-child{
        color: red;
    }
  }
  

  svg {
        grid-area: tagImage;
        align-items: center;
        height: 100%;
    }

    button {
        border: none;
        background-color: transparent;
    }
`


export const NotificationTitle = styled(Toast.Title)`
    grid-area: title;
`

export const NotificationDescription = styled(Toast.Description)`
    grid-area: description;
`

export const NotificationCloseButton = styled(Toast.Close)`
    grid-area: action;
`


export const ViewPortContainer = styled(Toast.Viewport)`
    position: fixed;
    top: 3rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    padding: 25;
    gap: 10;
    width: 390;
    max-width: 100vw;
    margin: 0;
    outline: 'none';
    z-index: 100;
`