import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
        ${'' /* // 10px/16px = 62.5% -> 1rem = 10px; */}
        @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
            font-size: 80%; 
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            font-size: 50%; 
        }
    }
    body{
        ${'' /* display: grid; */}
        max-width: 200rem;
        place-content: center;
        font-family: montserrat, sans-serif;
        background: ${props => props.theme.colorLight};
        color: ${props => props.theme.colorWhite};
        font-size: ${props => props.theme.font.medium};
        ${'' /* min-height: 100vh; */}
        ${'' /* overflow-x: hidden; */}
    }
`

export default GlobalStyles