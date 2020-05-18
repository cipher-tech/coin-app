import React from 'react'
import styled from 'styled-components'
import bg1 from "../images/pic5.jpg"

let Container = styled.div`
    /* background: purple; */
    grid-column: 1/-1;
    height: 30rem;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    background-image: linear-gradient(to bottom, rgba(47,137,252, .6) 100%, rgba(47,137,252, .6)), url('${bg1}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: ${props => props.theme.colorLight};
    .stats{
        display: flex;
        width: 80%;
        margin: 2rem auto;
        justify-content: space-around;
        
        p{
            font-size: 2rem;
            text-align: center;
            span{
                width: 100%;
                word-break: break-all;
                box-decoration-break: clone;
            }
        }
    }
    .message{
        font-size: 2rem;
        padding: 2rem 3rem;
        border-bottom: 2px solid ${props => props.theme.colorLight};
    }
    .hireButton{
        font-size: 1.5rem;
        border: 2px solid ${props => props.theme.colorLight};
        padding: 1rem 4rem;
        border-radius: 2rem;
    }
`
function Contacts() {
    return (
        <Container
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
            <div className="stats">
                <p>10 
                <br/>
                    <span>Projects</span>
                </p>
                <p>3  
                <br/>
                    <span>
                     Years
                    </span>
                </p>
                <p>5 
                <br/>
                    <span> Cients</span>
                </p>
                <p>3 
                <br/>
                    <span>
                        Languages
                    </span>
                </p>
            </div>
            <div className="message">
                LET'S WORK TOGETHER!
            </div>
            <div className="hireButton">
                Contact Us
            </div>
        </Container>
    )
}

export default Contacts


// const Container = styled.div`
//     display: grid;
//     justify-items: center;
//     /* grid-template-columns: 1fr; */
//     grid-column: 1/-1;
//     background: ${props => props.theme.colorPrimary};
//     width: 100%;
//     overflow: hidden;
    
//     .cont{
//         display: grid;
//         grid-column: 1/-1;
//         place-items: center;
//         grid-template-columns: repeat(3, 1fr);
//     }
//     .reach-title{
//         grid-column: 1/-1;
//         display: grid;
//         width: 100%;
//         flex-basis: 100%;
//         justify-items: center;
//         text-align: center;
//         font-size: ${props => props.theme.font.xLarge};
//         padding: 3rem 2rem;
//         flex-wrap: wrap;
//         font-weight: 450;
//     }
//     .reach-text{
//         display: flex;
//         width: 70%;
//         padding: 1rem 2rem;
//         text-align: center;
//         font-size: ${props => props.theme.font.large};
//         flex-wrap: wrap;
//         @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
//             width: 100%
//         }
//     }

//     .reach-image{
//         /* padding: 3rem; */
//         display: flex;
//         height: auto;
//         place-content: center;

//         img{
//             height: 100%;
//             width: 100%;
//         }
        
//     }
//     .reach-form--text{
//         font-size: ${props => props.theme.font.large};
//         display: flex;
       
//         padding: 2rem;
//     }
//     .reach-form--input{
//         display: flex;
//         justify-content: center;
//         padding: 1rem;
//         width: 100%;
//         border-radius: 2rem;
//         border: 1px solid rgb(255 255 255 / .4);
//         font-size: ${props => props.theme.font.large};
//         margin-bottom: 2rem;
       
//         &--text{
//             font-size: ${props => props.theme.font.large};
//             color: ${props => props.theme.colorWhite};
//             background: transparent;
//             border: none;
//             margin: 0 1rem;
//             &:focus{
//                 outline: none;
//                 border: none;
//                 border-bottom:1px solid ${props => props.theme.colorWhite};
//             }
//             &::placeholder{
//                 color: ${props => props.theme.colorWhite};
//             }
//         }
//     }
// `
// const OurReach = () => {
//     return (
//         <Container>
//             {/* <div className="cont"> */}
//                 <h3 className="reach-title"
//                     data-aos="zoom-in"
//                     data-aos-offset="400"
//                     data-aos-delay="300"
//                     data-aos-duration="600"
//                     data-aos-easing="ease-in-out"
//                     data-aos-once="true">
//                     Anywhere in the World
//                     We've got you corved
//                 </h3>
//                 <p className="reach-text"
//                     data-aos="zoom-in"
//                     data-aos-offset="400"
//                     data-aos-delay="400"
//                     data-aos-duration="600"
//                     data-aos-easing="ease-in-out"
//                     data-aos-once="true">
//                     Our services are available to you anywhere, anytime.
//                     Each AJ global ventures  system is built for you and tailored to suit your need.
//                     That’s how we plan to change the world.
//                     By joining AJ global ventures, you help to make this dream come true and change the world with us
//             </p>

//                 <div className="reach-image"
//                     data-aos="zoom-in"
//                     data-aos-offset="500"
//                     data-aos-delay="500"
//                     data-aos-duration="600"
//                     data-aos-easing="ease-in-out"
//                     data-aos-once="true">
//                     <img src={image} alt="world pics" />
//                 </div>
//                 <div className="reach-form"
//                     data-aos="zoom-in"
//                     data-aos-offset="300"
//                     data-aos-delay="500"
//                     data-aos-duration="800"
//                     data-aos-easing="ease-in-out"
//                     data-aos-once="true">
//                     <p className="reach-form--text">
//                         Subscribe to our newsletter
//                 </p>
//                     <p className="reach-form--input">
//                         <input type="text" className="reach-form--input--text" placeholder="Email-Address" />
//                         <span className="reach-form--input--icon">></span>
//                     </p>
//                 </div>
//             {/* </div> */}
//         </Container>
//     )
// }

// export default OurReach
