import React, { useEffect } from 'react'
import barChart from "../../images/barChart.svg"
// import StatisticsSvg from "../../images/StatisticsSvg.svg"
import ReferrerSvg from "../../images/rate.png"
import quickDetails from "../../images/quickDetails.png"
import styled from 'styled-components'
import CoinWidget from '../../components/widget/wigjet'
import { AdminCard } from '../../components'
import { connect } from 'react-redux'
import Axios from 'axios'
import routes from '../../navigation/routes'
import { fetchUserInfoActionCreator } from '../../reduxStore'

const Container = styled.div`
    .dashboard{
    grid-column: 2/ -1;
    background: ${props => props.theme.colorLight};
    min-height: 100vh;
    min-width: 100%;
    padding: 2rem 3rem;
    display: grid;
    z-index: 0;
    /* place-items: center; */
    border-radius: 2rem 0 0 2rem;
    &__title{   
        font-weight: 500;
        color: ${props => props.theme.colorPrimary};
        font-family: ProximaNovaSoftW03-Regular;
    }
    &__overView{
        grid-column: 1/-1;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
        gap: 1rem;

        &-items{
            /* grid-column: 1/-1; */
            margin-top: 2rem;
            width: max-content;
            height: min-content;
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(2, 1fr);
            box-shadow: .3rem .4rem 7px rgba(0,0,0, .4);
            border-radius: 1.5rem;
            
            &-stats{
                display: grid;
                justify-items: center;
                align-items: center;
                padding: 1rem 2rem;
                color: ${props => props.theme.colorPrimary};

                &--title{
                    width: 10rem;
                    font-weight: 300;
                    padding: .3rem 0rem 0 1.8rem;
                    font-size: ${props => props.theme.font.small};
                    
                }
                &--digit{
                    font-weight: 700;
                    padding: .8rem 0;
                    font-size: ${props => props.theme.font.xlarge};
                    text-align: left;
                }
                &--rate{
                    font-weight: 500;
                    margin-left: -2.5rem;
                    font-size: ${props => props.theme.font.xsmall};
                    text-align: left;
                    align-self: flex-start;
                    color: ${props => props.theme.colorSuccess};
                }
            }

            &-icon{
                width: 100%;
                /* height: 100%; */
                display: block;
                object-fit: cover;
                img{
                    width: 90%;
                    height: 100%;
                    /* object-fit: cover; */
                }
            }
        }
    }
    &__chart{
        grid-column: 1/-1;
        /* height: 100%; */
        text-align: center;
        display: block;
        object-fit: cover;
        margin: 2rem 0rem;
        img{
            width: 90%;
            height: 100%;
            /* object-fit: cover; */
        }
    }
    &__details{
        grid-column: 2/-1;
        /* width: 100%; */
        grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
        gap: 3rem;
        text-align: center;
        display: grid;
        object-fit: cover;
        img{
            width: 100%;
            /* height: 100%; */
            /* object-fit: cover; */
        }
    }
    }
`
const Dashboard = ({ fetchUserInfo, user = 0 }) => {
    useEffect(() => {
        const auth_token = JSON.parse(localStorage.getItem("userInfo")).user.auth_token
        const id = JSON.parse(localStorage.getItem("userInfo")).user.id

        Axios.post(`${routes.api.getUser}?token=${auth_token}`, { id })
            .then(res => {
                // console.log(res.data.data);
                if (res.data.status === "success") {
                    fetchUserInfo(res.data.data)
                }

                return
            })

        return () => {

        }
    }, [fetchUserInfo])
    return (
        <Container className="dashboard">
            <h1 className="dashboard__title">Dashboard</h1>
            <div className="dashboard__overView">
                <AdminCard title="wallet balc" stats={Object.entries(user).length > 0 ? user.userInfo.wallet_balc : 0} icon={barChart} />
                <AdminCard title="total trans" stats={Object.entries(user).length > 0 ? user.userInfo.earnings : 0} icon={barChart} />
                <AdminCard title="total widt" stats={Object.entries(user).length > 0 ? user.userInfo.widthdrawals_id : 0} icon={barChart} />
            </div>
            <div className="dashboard__chart">
            sdsdsa
                <CoinWidget ele="#mydiv" id="mydiv" link={`<div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>`} />
            </div>
            <div className="dashboard__details">
                <img src={ReferrerSvg} alt=" Statistics Svg" />
                <img src={quickDetails} alt=" Statistics Svg" />
            </div>
        </Container>
    )
}

const mapStateToProps = ({ users }) => ({
    user: users
})

const mapDispatchToProps = {
    fetchUserInfo: fetchUserInfoActionCreator
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

//HostProvider- namecheap
//username: GSSGROUP
//password: kC%Kq9_Hb&rWB7(

//Domain username- wilpat456@gmail.com
//password - q!M5A89mRJXz
// provider- Web4Africa

// server credentials- https://server126.web-hosting.com:2083
//Username - gssgvrqp
//pawwd - PenJBe8nT9Fd