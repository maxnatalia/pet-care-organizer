import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family:"Montserrat", sans-serif;
        font-size: 16px;
        color:  ${({ theme }) => theme.color.textDefault};
        background: ${({ theme }) => theme.color.backgroundBody};

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
           font-size: 14px;
        }
    }
`;
