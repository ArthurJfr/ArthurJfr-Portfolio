import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color : #030303;
        --text-color : #FFF;
    }
    body {
        background-color: var(--bg-color);
        color : var(--text-color);

        padding : 0;
        margin : 0;
        box-sizing: border-box;
        overflow : hidden;
    }
`;

export default GlobalStyle;