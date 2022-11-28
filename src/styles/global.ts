import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

        :focus {
        outline: 0;
     }
    }
    body {
        background-image: url('src/assets/background.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        background-color: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["black"]};
        -webkit-font-smoothing: antialiased;
        margin: 0
    }

    body, textarea  {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
        transition: background-color color 0.5s ease;
    }
`;
