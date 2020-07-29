import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
	0%{ 
        transform: scaleX(0);
		padding: 2rem 4rem;
		width: auto;
    }

    10%{
        transform: scaleX(1);
		padding: 2rem 4rem;
		width: auto;
    }
    95%{
        transform: scaleX(1);
		padding: 2rem 4rem;
		width: auto;
    }
    100%{
        transform: scaleX(0);
		padding: 0;
		width: auto;
    }
`
const MessageModal = styled.p`
    position: fixed;
    color: ${props => props.theme.colorWhite};
    background: ${props => props.error? "#ff3333e8" : "#0bd30be0"};
    top: 10rem;
    right: 5rem;
    border-radius: 1.5rem;
    font-size: ${props => props.theme.font.large};
    transition: all 1s ease .5s;
    animation: ${modalAnimation} 8s ease .5s;
    overflow: hidden;
    width: 0px;
    z-index: 1500;
`

export default MessageModal