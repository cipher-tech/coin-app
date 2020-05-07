import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from './photos';
import styled from 'styled-components';

const Container = styled.div`
    grid-column: 1/-1;
    
    .galleryImg{
        background: red;
        transition: all 1s ease-in-out .1s;
        perspective: 1000px;
        &:hover, :focus{
            transform: translateY(-0rem) scale(1) rotateY(180deg)
        }
    }
` 
export const Galary = () => {
    return (
        <Container
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
            <Gallery lazyLoad={true} photos={photos} />
        </Container>
    ) 
}
