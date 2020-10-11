import React from 'react'
import styled from 'styled-components'
// import SecureLS from 'secure-ls'
// import { useSpring, animated } from 'react-spring'
// import { DropAccodion } from '../../components'


const Container = styled.div`
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    /* gap: 10rem; */
    min-height: 100vh;
    width: 100%;

    /* align-items: center; */
    place-self: center;

    .header{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        color: ${props => props.theme.colorPrimary};
        place-items: center;
        height: max-content;
        align-self: flex-start;
        margin: 2rem;
        h1{
            font-size: ${props => props.theme.font.xxlarge};
            color: ${props => props.theme.colorPrimary};
        }

        p{
            font-size: ${props => props.theme.font.xlarge};
            padding: 1rem ;
        }


    }

    .faq__main{
        grid-column: 1/-1;
        display: grid;
        font-size: ${props => props.theme.font.large};
        /* background: ${props => props.theme.colorWhite}; */
        /* box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3); */
        height: auto;
        align-self: flex-start;
        padding: 1rem 2rem;
        border-radius: 2rem;
        margin: 2rem;
        &-header{
            color: ${props => props.theme.colorPrimary};
            padding: 1.5rem 2.5rem;
            text-align: center;
            font-weight: bold;
        }
        &--text{
            line-height: 2;
            font-size: ${props => props.theme.font.large};
            color: ${props => props.theme.colorDark};

            &-header{
                font-size: ${props => props.theme.font.xlarge};
                color: ${props => props.theme.colorPrimary};
                font-weight: bold;
                padding: 2rem 2.5rem;
            }
            &-span{
                padding: 1rem 2rem;
                display: flex;
                margin: 2rem 0;
                justify-content: space-between;
                border-bottom: 1px dashed ${props => props.theme.colorDark};
                &-img{
                    height: 7rem;
                    width: 7rem;
                    border-radius: 50%;
                    box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
                }
                &-txt{
                    padding: 0 2rem;
                }
            }
        }

    }
   
`
function Policies() {
    
    return (
        <Container>

            <div className="header">
                <h1>
                    Terms and Condition
                </h1>
                {/* <p>We've Got Answers!</p> */}
            </div>
            <div className="faq__main">
                {/* <h2 className="faq__main-header"> Terms and Condition </h2> */}
                <div className="faq__main--text">
                    <div className="term_cont">
                        <h1 className="faq__main--text-header">RULES & AGREEMENTS.</h1>

                        <p> Please read the following rules carefully before signing in.</p>

                        <p>
                            You agree to be of legal age in your country to partake in this program, and in all the cases your minimal age must be 18 years.
			            </p>

                        <p>
                            CJ GRAND EXCHANGE is not available to the general public and is opened only to the qualified members of cashcapitaloption LTD, the use of this site is restricted to our members and to individuals personally invited by them. Every deposit is considered to be a private transaction between the CJ GRAND EXCHANGE and its Member.
			            </p>

                        <p> We are not FDIC insured. We are not a licensed bank or a security firm.</p>

                        <p>
                            You agree that all information, communications, materials coming from CJ GRAND EXCHANGE are unsolicited and must be kept private, confidential and protected from any disclosure. Moreover, the information, communications and materials contained herein are not to be regarded as an offer, nor a solicitation for tradings in any jurisdiction which deems non-public offers or solicitations unlawful, nor to any person to whom it will be unlawful to make such offer or solicitation.
			            </p>

                        <p>
                            All the data giving by a member to CJ GRAND EXCHANGE will be only privately used and not disclosed to any third parties. CJ GRAND EXCHANGE is not responsible or liable for any loss of data.
 			            </p>

                        <p>
                            You agree to hold all principals and members harmless of any liability. You are trading at your own risk and you agree that a past performance is not an explicit guarantee for the same future performance. You agree that all information, communications and materials you will find on this site are intended to be regarded as an informational and educational matter and not an trading advice.
			            </p>

                        <p>
                            We reserve the right to change the rules, commissions and rates of the program at any time and at our sole discretion without notice, especially in order to respect the integrity and security of the members' interests. You agree that it is your sole responsibility to review the current terms.
			            </p>

                        <p>
                            CJ GRAND EXCHANGE is not responsible or liable for any damages, losses and costs resulting from any violation of the conditions and terms and/or use of our website by a member. You guarantee to CJ GRAND EXCHANGE that you will not use this site in any illegal way and you agree to respect your local, national and international laws.
			            </p>

                        <p>
                            Don't post bad vote on Public Forums and at Gold Rating Site without contacting the administrator of our program FIRST. Maybe there was a technical problem with your transaction, so please always CLEAR the thing with the administrator.
			            </p>

                        <p>
                            We will not tolerate SPAM or any type of UCE in this program. SPAM violators will be immediately and permanently removed from the program.
			            </p>

                        <p>
                            CJ GRAND EXCHANGE reserves the right to accept or decline any member for membership without explanation.
 			            </p>

                        <p>If you do not agree with the above disclaimer, please do not go any further.</p>



                    </div>
                    <br />

                    <span className="faq__main--text-header">
                        Personal Account Opening <br />
                    </span>

                    •  Opening a personal account on the site CJ GRAND EXCHANGE is the voluntary and independent decision of each User individually.<br />

                    •  Registration procedure at the site CJ GRAND EXCHANGE does not foresee submission of any documents identifying the person of a participant.<br />

                    •  Each User can have only one account on the CJ GRAND EXCHANGE platform. Upon detection of multi-accounts the Company reserves the right to block these accounts without refund.<br />

                    •  In the setting of the personal account, the User undertakes to indicate the extremely accurate information.<br />

                    •  Personal account cannot be deleted.<br />

                    <span className="faq__main--text-header">
                        The rights and obligations of the Company<br />
                    </span>

                    •  The Company undertakes to provide a connection between online service and the User of this service the best quality.<br />

                    •  Authorized employees of the Company have the right to make changes and corrections to these Terms without notice to participants.
                     Periodic familiarization with the terms of work
                     of CJ GRAND EXCHANGE will allow you to stay informed about the current situation and is your personal responsibility.<br />

                    •  The Company is not responsible for any technical malfunctions of electronic payment systems.<br />

                    •  The website administration has the right without prior notice to block access to the website if a User has breached these Terms.<br />

                    The rights and obligations of the User<br />
                    •  The User may make use of all the website features, carry out trading activities, conduct financial transactions,
                    ask any questions relating to the services of the website.<br />

                    •  The User is responsible for maintaining the confidentiality of account information, including password, and for any and all activities
                    conducted on behalf of the User account.<br />

                    •  The User has the right to attract new participants in the project various advertising methods (banners, websites, groups, forums, etc.)
                    •  The User undertakes not to take any action which may be regarded as violating the normal functioning of the website. The Users are
                     prohibited from interfering with the operation of this resource.<br />

                    •  The User agrees that the use of the CJ GRAND EXCHANGE platform does not give him the rights to the intellectual property of this resource.<br />

                    <span className="faq__main--text-header">
                        Confidentiality <br />
                    </span>

                    All the data giving by a User to CJ GRAND EXCHANGE will be only privately used and not disclosed to any third parties. The information
                    gathered during the use of this service is used solely to simplify the user account administration. The Company is not responsible
                    for personal information leakage if the User accidentally or intentionally has provided access to their account to third parties.<br />

                    The Client agrees that all information, communications, materials coming from CJ GRAND EXCHANGE are unsolicited and must be kept private,
                    confidential and protected from any disclosure. <br />

                    <span className="faq__main--text-header">
                        Limitation of liability
                    </span>
                    <br/>
                    The Company cannot ensure right satisfaction of commitments in instances of power majeure just as in situations when
                    this disappointment of fulfillment is brought about by conditions outside the Company's control. During this time, the
                    parties have no mutual claims, and each party assumes its own risk of the consequences of force majeure.
                    </div>
            </div>
        </Container>
    )
}

export default Policies
