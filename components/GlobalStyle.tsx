import { createGlobalStyle } from "styled-components";
import { useState } from "react";




const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color : #030303;
        --bg-img : url('/img/bg.svg');
        --text-color : #FFF;

        --border-rm : 8px;
        --border-rl : 16px;

        --bg-card : rgba(255,255,255, 0.04);

        --border-card : 1px solid #454545;

        
    }
    body {
        background-image: var(--bg-img);
        color : var(--text-color);

        padding : 0;
        margin : 0;
        box-sizing: border-box;
        overflow : hidden;
    }
`;

export default GlobalStyle;