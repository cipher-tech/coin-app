import React from 'react'
import styled from 'styled-components'
import { Heading } from '..'

const Container = styled.div`
    /* background: blue; */
    color: #3e416d;
    grid-column: 1/-1;
    display: grid;
    padding: 5rem 0 ;
    /* height: 10rem; */

    &::selection {
        background: rgb(38, 16, 80);
        color: #fff;
        text-shadow: none;
    }
    .section-title{
        p{
            font-size: 35px;
            font-weight: 600;
        }
    }
    .pricing-plans-container{
        margin-top: .729166667in;
        background: white;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        border-radius: .041666667in;
        /* font-family: gotham-rounded !important; */
        font-size: 15px;
        font-weight: 300;
        line-height: 1.8;
        -webkit-text-size-adjust: 100%;
        color: #29303b;

        .recommended{
            box-shadow: 0 0pt 33.75pt rgba(0, 0, 0, .09);
            margin: 0 11.25pt 0 11.25pt;
            padding: .364583333in 26.25pt;
            flex: 1;
            position: relative;
            .recommended-badge{
                position: absolute;
                color: #fff;
                background: #3e416d;
                text-align: center;
                left:0;
                top: -.46875in;
                line-height: 2.8125pc;
                font-weight: 600;
                height: 45px;
                width: 100%;
                border-radius: 4px .041666667in 0 0;
            }
        }
        .pricing-plan{
            padding-left: .364583333in;
            padding-top: .364583333in;
            padding-right: 12.75pt;
            padding-bottom: .364583333in;
            position: relative;
            flex: 1;

            h3{
                font-size: 1.375pc;
                font-weight: 600;
                line-height: 1.4;
                margin: 0 0 15px 0;
                color: #3e416d;
                text-transform: capitalize;
            }
            p{
                margin: 0;
            }
            .uk-switcher{
                margin: 0;
                padding:0;
                list-style: none;

                .uk-active{
                    display: list-item;
                    text-align: -webkit-match-parent;
                }
                .pricing-plan-label{
                    margin: 16.5pt 0 0 0;
                    padding: 11.25pt;
                    line-height: .25in;
                    text-align: center;
                    font-size: 18px;
                    border-radius: 3pt;
                    background: #f6f6f6;

                    strong{
                        line-height: 1.87pc;
                        margin-right: 3.75pt;
                        font-weight: 700;
                        font-size: 24pt;
                    }
                }
            }
            .pricing-plan-features{
                strong{
                    margin-top: .3125pc;
                    display: inline-block;
                    line-height: 18pt;
                    margin-bottom: 3.75pt;
                    font-weight: 600;
                    color: #333;
                }
                ul{
                    margin: 0;
                    padding: 0;

                    li{
                        padding: 2.25pt 0 2.25pt 0;
                        line-height: .25in;
                        display: block;
                    }
                }
            }
            .btns{
                font-weight: 600;
                border-radius: 5px;
                line-height: 28px;
                text-align: center;
                padding: 4.5pt 0 ;
                margin: .9375pc 0 0 0;
                display: inline-block;
                box-shadow: 0 3pt 12px rgba(102, 103, 107, .1);
                border: 1.125pt solid #3e416d;
                width: 100%;
                text-decoration: none;
                cursor: pointer;
                color: #3e416d;

            }
        }
    }
`
const Plans = () => {
    return (
        <Container>
    
            <Heading title="Pricing Plans" />
        
            {/* <div className="section-title">
                <h1> Pricing Plans </h1>
            </div> */}

            <div className="pricing-plans-container">

                {/* <!-- Plan --> */}
                <div className="pricing-plan">
                    <h3>Basic Plan</h3>
                    <p>To start your learning to day you will get free 10 Course .</p>
                    <ul className="uk-switcher" id="change-plan">
                        <li>
                            <div className="pricing-plan-label"><strong>$29</strong>/ monthly</div>
                        </li>

                    </ul>
                    <div className="pricing-plan-features">
                        <strong>Features of Basic Plan</strong>
                        <ul>
                            <li>Exercise files </li>
                            <li>Interactive tools</li>
                            <li>On-demand learning</li>
                        </ul>
                    </div>
                    <a href="pages-checkout-page.html" className="btns">Buy Now</a>
                </div>

                {/* <!-- Plan --> */}
                <div className="pricing-plan recommended">
                    <div className="recommended-badge">Recommended</div>
                    <h3>Pro Plan</h3>
                    <p>To start your learning to day you will get free 10 Course .</p>
                    <ul className="uk-switcher" id="change-plan">
                        <li>
                            <div className="pricing-plan-label billed-monthly-label"><strong>$69</strong>/ monthly
            </div>
                        </li>

                    </ul>
                    <div className="pricing-plan-features">
                        <strong>Features of Pro Plan</strong>
                        <ul>
                            <li>Exercise files </li>
                            <li>Access entire course library </li>
                            <li>99+ High Quality Video Courses</li>
                        </ul>
                    </div>
                    <a href="pages-checkout-page.html" className="btns">Buy Now</a>
                </div>

                {/* <!-- Plan --> */}
                <div className="pricing-plan">
                    <h3>For Teams</h3>
                    <p>To start your learning to day you will get free 10 Course .</p>
                    <ul className="uk-switcher" id="change-plan">
                        <li>
                            <div className="pricing-plan-label billed-monthly-label"><strong>$99</strong>/ monthly
            </div>
                        </li>

                    </ul>
                    <div className="pricing-plan-features">
                        <strong>Features of For Teams</strong>
                        <ul>
                            <li>Certification exams</li>
                            <li>Dedicated success team</li>
                            <li>1000+ High Quality Video Courses</li>
                        </ul>
                    </div>
                    <a href="pages-checkout-page.html" className="btns">Buy Now</a>
                </div>
            </div>
        </Container>
        /* 
        Global Wealth's initial investment is $500 to enable you start up and profit within a reasonable time frame.

BEGINNERS ($500 - $19,999): makes 1.5% daily profit.
EXAMPLE! Calculation procedures: $500 multiplied by 7.2% will give you $15.00 daily which will subsequently earn you $52.5 weekly.

STANDARD ($20,000- $49,999): makes 2.0% daily profit.
EXAMPLE! Calculation procedures: $20,000 multiplied by 2.0% will give you $400 daily which will subsequently earn you $2,800 weekly.

ADVANCE ($50,000 - $99,999): makes 3.0% daily profit.
EXAMPLE! Calculation procedures: $50,000 multiplied by 3.0% will give you $1,500 daily and will subsequently earn you $10,500 weekly.

BUSINESS ($100,000 - $INFINITY): makes 5.0% daily profit.
EXAMPLE! Calculation procedures: $100,000 multiplied by 5.0% will give you $5000 daily and will subsequently earn you $35,000 weekly. */
    )
}

export default Plans
