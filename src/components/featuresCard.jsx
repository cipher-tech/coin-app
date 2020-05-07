import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    .features--content{
    display: grid;
    margin-top: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    /* height: 20rem; */
    /* gap: .5rem; */
    border-radius: 1.5rem;
    padding: 3rem 5rem;
    box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),
    -0.2rem -0.4rem 20px rgba(255,255,255, .3);

    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium2}) {
        padding: 3rem 1rem;
        /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
    }
    &-title{
        display: grid;
        grid-template-rows: max-content;
        font-size: ${props => props.theme.font.xlarge};
        width: 70%;
        padding: 3rem 1rem;
        /* height: 5rem; */
        justify-content: center ;
        align-content: center;

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            width: 100%;
            padding: 1.5rem 1rem;
        }
    }
    &-text{
        grid-column: 1;
        display: grid;
        /* width: 40%; */
        text-align: center;
        justify-items: center;
        align-items: flex-start;
        width: 90%;
        font-size: ${props => props.theme.font.large};
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            width: 100%;
            justify-content: center;
            align-content: flex-start;
            padding: 1.5rem 2rem;
        }
    }

    &-image{
        grid-row: ${props => props.invert ? 1/-1 : ""};
        /* grid-column: 2/-1; */
        /* display: grid; */
        justify-items: flex-end;
        width: 100%;
        height: 15rem;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
            grid-row: 1/-1;
            margin-bottom: 2rem;
        /* grid-column: 2/-1; */
        }

        img{
            width: 100%;
            height: 100%;
        }
    }
    }
`
const FeaturesCard = props => {
    return (
        <Container invert={props.invert}>
            <div className="features--content"
                data-aos="fade-up"
                data-aos-offset="400"
                data-aos-delay="500"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                <div
                >
                    <h4 className='features--content-title'>
                        {props.title}
                    </h4>
                    <p className="features--content-text">
                        {props.text}
                    </p>
                </div>

                <div className="features--content-image">
                    {props.calc? <div>
                            {props.image}
                        </div> : <img src={props.image} alt="bitcoin img" />}
                </div>
            </div>
        </Container>
    )
}

export default FeaturesCard
