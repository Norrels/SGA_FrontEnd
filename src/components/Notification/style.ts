import styled from "styled-components";
import * as Toast from "@radix-ui/react-toast";

export const NotificationContainer = styled(Toast.Root)`
  background-color: white;
  border-radius: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  /* padding: 20px 20px 0px 15px; */

  display: grid;
  grid-template-areas: "tagImage title action" "tagImage description action" "progressBar progressBar progressBar";
  column-gap: 15px;
  row-gap: 0.1rem;
  align-items: center;

  svg {
        grid-area: tagImage;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-left: 20px;
        padding-top: 20px;
    }

    button {
        border: none;
        background-color: transparent;
    }
`

export const NotificationProgressBar = styled.span`
    height: 5px;
    margin-top: 1.2rem;
    border-radius: 8px;

    display: block;
    background-color: black;
    grid-area: progressBar;

`


export const NotificationTitle = styled(Toast.Title)`
    padding-top: 20px;
    grid-area: title;
`

export const NotificationDescription = styled(Toast.Description)`
    grid-area: description;
`

export const NotificationCloseButton = styled(Toast.Close)`

    padding-right: 20px;
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
    z-index: 2147483647;
    outline: 'none',
`