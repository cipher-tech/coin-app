import styled from "styled-components";

const Button = styled.button`
    display: grid;
    align-self: center;
    justify-self: flex-end;
    text-align: center;
    justify-content: center;
    padding:  1rem ${props => props.small ? "2rem" : "4rem" } ;
    font-size: ${props => props.small? props.theme.font.medium : props.theme.font.xlarge};
    border-radius: 20rem;
    margin: 0 .5rem;
    border: none;

    box-shadow: .5rem .9rem 10px rgba(0,0,0, .3),
    -0.2rem -0.4rem 20px rgba(255,255,255, .3);
    background: ${props => props.background? props.background : props.theme.colorPrimary};
    color: ${props => props.color? props.color : props.theme.colorLight};
  
    text-transform: capitalize;
    &:active{
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        color: ${props => props.theme.colorPrimary};
    }
    &:focus{
        outline: none;
    }
`

export default Button;