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
        background-image: ${(props) => `url(${props.theme["backgroundImage"]})`};;
        background-repeat: no-repeat;
        background-size: 2000px;
        background-position: top;
        background-color: ${(props) => props.theme["background"]};
        color: ${(props) => props.theme["black"]};
        -webkit-font-smoothing: antialiased;
        width: calc(100vw - 34px);
        margin: 0;

    
       
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
