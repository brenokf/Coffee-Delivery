import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flexbox;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.background} ;
    color: ${(props) => props.theme['base-title']};  
    -webkit-font-smoothing:antialiased;
}

body , input, textarea, button{
    font-family: 'Roboto', sans-serif;
}

`
