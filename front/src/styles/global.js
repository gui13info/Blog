import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 10px;
        --color-primary: #153E90;
        --color-bg: #F0F0F0;
        --color-white: #F0F0F5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        background-color: var(--color-bg);
    }
    a{
        text-decoration: none;
    }
    ul, ol {
        list-style: none;
    }
`;