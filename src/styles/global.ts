import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['black']};
        -webkit-font-smoothing: antialiased;
        margin: 0 2rem;
    
    }
    body, textarea  {
        font-family: 'Baloo 2', cursive;
        font-weight: 400;
        font-size: 1rem;
    }
    input, button {
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
        transition: background-color 0.5s ease;
    }
`