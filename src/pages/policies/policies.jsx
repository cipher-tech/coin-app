import React from 'react'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'
// import { DropAccodion } from '../../components'


const Container = styled.div`
    grid-column: 2/10;
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
        color: ${props => props.theme.colorDark};
        place-items: center;
        height: max-content;
        align-self: flex-start;
        margin: 2rem;
        h1{
            font-size: ${props => props.theme.font.xxlarge};
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
        box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),
            .2rem .4rem 10px rgba(0,0,0, .3);
        height: auto;
        align-self: flex-start;
        padding: 1rem 2rem;
        border-radius: 2rem;
        margin: 2rem;
        &-header{
            color: ${props => props.theme.colorDark};
            padding: 1.5rem 2.5rem;
        }
        &--text{
            line-height: 2;
            font-size: ${props => props.theme.font.xlarge};
            color: ${props => props.theme.colorDark};

            &-header{
                font-size: ${props => props.theme.font.xlarge};
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
                <h2 className="faq__main-header"> Terms and Condition </h2>
                <p className="faq__main--text">
                    These Terms set out the general procedure for interaction between AlphaCoinz, enlisted as per the laws of the United Kingdom
                    with enrollment number 2093948 (hereinafter alluded to as the Company; We) and a person who have reached the age of 18 years
                    (hereinafter alluded to as the User; the Investor; You). All cooperations between the Company and the Investor are administered by
                    these Terms and go inside the definition Private Transaction. By registering on the site Alphacoinz,
                    User fully and unconditionally agrees with all provisions of these Terms. All actions undertaken by the User is voluntary.
                    <br />

                    <span className="faq__main--text-header">
                        Personal Account Opening <br />
                    </span>

                    •  Opening a personal account on the site alphaCoinz is the voluntary and independent decision of each User individually.<br />

                    •  Registration procedure at the site alphaCoinz does not foresee submission of any documents identifying the person of a participant.<br />

                    •  Each User can have only one account on the alphaCoinz platform. Upon detection of multi-accounts the Company reserves the right to block these accounts without refund.<br />

                    •  In the setting of the personal account, the User undertakes to indicate the extremely accurate information.<br />

                    •  Personal account cannot be deleted.<br />


                    <span className="faq__main--text-header">
                        Investment Conditions<br />
                    </span>

                    •  Start investing activities can be with a minimum capital of $500.<br />


                    •  The company uses only Cryptocurrencies as their payment system.<br />

                    •  The Investor has the right to open one or more parallel deposits at his own discretion.<br />

                    •  All the funds earned within the scope of the platform are accrued in accordance with the rates and conditions defined in Investor's investment plan. Profits
                     are accrued once after a period specified in participant's investment plan.<br />

                    •  Any amount on your account balance is available for withdrawal. You can withdraw funds only in the same currency as you invested.<br />

                    •  All the withdrawal requests are processed manually. Payout schedule: Processing of request for payment of funds within 72 business hours.<br />



                    <span className="faq__main--text-header">
                        The rights and obligations of the Company<br />
                    </span>

                    •  The Company undertakes to provide a connection between online service and the User of this service the best quality.<br />

                    •  The Company is obliged to calculate and pay the income in accordance with the service investment plans.<br />

                    •  Authorized employees of the Company have the right to make changes and corrections to these Terms, to change the percentage of
                    commissions and terms of investment plans without notice to participants. Periodic familiarization with the terms of work
                     of Alphacoinz will allow you to stay informed about the current situation and is your personal responsibility.<br />

                    •  The Company is not responsible for any technical malfunctions of electronic payment systems.<br />

                    •  The website administration has the right without prior notice to block access to the website if a User has breached these Terms.<br />

                    The rights and obligations of the User<br />
                    •  The User may make use of all the website features, carry out investment activities, conduct financial transactions,
                    receive profit on their active deposits, receive referral commissions under the conditions of the Affiliate Program, ask any questions
                    relating to the services of the website.<br />

                    •  The User has the right to choose any of the provided and the currently available investment plans.<br />

                    •  The User is responsible for maintaining the confidentiality of account information, including password, and for any and all activities
                    conducted on behalf of the User account.<br />

                    •  The User has the right to attract new participants in the project various advertising methods (banners, websites, groups, forums, etc.)
                    •  The User undertakes not to take any action which may be regarded as violating the normal functioning of the website. The Users are
                     prohibited from interfering with the operation of this resource.<br />

                    •  The User agrees that the use of the AlphaCoinz platform does not give him the rights to the intellectual property of this resource.<br />

                    <span className="faq__main--text-header">
                        Confidentiality <br />
                    </span>

                    All the data giving by a User to AlphaCoinz will be only privately used and not disclosed to any third parties. The information
                    gathered during the use of this service is used solely to simplify the user account administration. The Company is not responsible
                    for personal information leakage if the User accidentally or intentionally has provided access to their account to third parties.<br />

                    The Client agrees that all information, communications, materials coming from AlphaCoinz are unsolicited and must be kept private,
                    confidential and protected from any disclosure. <br />

                    <span className="faq__main--text-header">
                        Limitation of liability
                    </span>

                    The Company cannot ensure right satisfaction of commitments in instances of power majeure just as in situations when
                    this disappointment of fulfillment is brought about by conditions outside the Company's control. During this time, the
                    parties have no mutual claims, and each party assumes its own risk of the consequences of force majeure.
                    </p>
            </div>
        </Container>
    )
}

export default Policies
