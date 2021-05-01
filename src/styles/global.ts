import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #ffffff;

        --gray-100: #c8c8cb;
        --gray-300: #4b5862;

        --green-100: #1fb14c;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--white);
    }

    body, input, textarea, button {
        font-family: 'Overpass', 'Ubuntu', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;