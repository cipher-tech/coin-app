import React, { useEffect } from 'react'
import styled from 'styled-components'
// import rateImage from "../../../images/rate.png"
// import Table from './table'
// import CoinWidget from "../../../components/widget/wigjet"
import Axios from 'axios'
import bitcoinIcon from "../../../images/btcIcon.jpg"
import ethIcon from "../../../images/etheteumIcon.jpg"
import poeIcon from "../../../images/poeIcon.jpg"
import lunoIcon from "../../../images/lunoIcon.jpg"
import xCoinIcon from "../../../images/xCoinIcon.jpg"
import routes from '../../../navigation/routes'
import { fetchAllRatesActionCreator } from '../../../reduxStore'
import { connect } from 'react-redux'
import PaginatedTable from '../../../components/table/tablePagination'
// import CoinWidget from '../../../components/widget/wigjet'

const Container = styled.div`
    grid-column: ${props => props.gridPos || "2/-1"};
    display: grid;
    min-height: 100%;
    min-width: 100%;
    place-items: flex-start;
    background: ${props => props.theme.colorLight};
    border-radius: 2rem 0 0 2rem;
    z-index: 30;
    .rate{
        grid-column: 1/-1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
        width: 100%;
        /* padding: 3rem; */
        align-items: flex-start;
        place-items: center;
        /* height: 78vh; */
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall2}) {
           padding: 3rem 0;
        }
        &_chat{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
			grid-template-rows: repeat(2, minmax(30rem, 1fr));
			gap: 2rem;
			align-self: flex-start;
			width: 100%;
			height: 35rem;
			}

        img, #icon{
            height: 3rem;
            width: 3rem;        }

    }
`
function MasterAdminRates({ gridPos, fetchAllRates, rates }) {
	useEffect(() => {
		const auth_token = !JSON.parse(localStorage.getItem("userInfo")) ? "" : JSON.parse(localStorage.getItem("userInfo")).user.auth_token || ""

		// console.log('data :>> ', data);
		Axios.get(`${routes.api.getRates}?token=${auth_token}`)
			.then(res => {
				// console.log(res.data.data);
				fetchAllRates(res.data.data)
				return
			})

		return () => {

		}
	}, [fetchAllRates])

	const coinIcons = {
		bitcoin: bitcoinIcon,

		etherum: ethIcon,

		// bitcoin: bitcoinIcon,

		'gift Card': poeIcon,

		nike: xCoinIcon,

		xpss: lunoIcon,

		cycoin: poeIcon,

	}
	const columns = [
		{
			Header: 'Coin Rates',
			columns: [
				{
					Header: 'Name',
					// accessor: 'name',
					accessor: (rowInfo) => (
						<img id="icon" src={coinIcons[rowInfo?.name] || bitcoinIcon} alt="cycoin" />
					),
					collapse: true,
				},
				// {
				//   Header: 'Current_rate',
				//   accessor: 'current_rate',
				//   collapse: true,
				// },
				{
					Header: 'Type',
					accessor: 'type',
				},
				{
					Header: 'Buying',
					accessor: 'buying',
					collapse: true,
				},
				{
					Header: 'Selling',
					accessor: 'selling',
					collapse: true,
				},
			],
		},
	]
	return (
		<Container gridPos={gridPos}>
			<div className="rate">
				<PaginatedTable tableColumns={columns} data={rates.allRates ? rates.allRates : []} />
				<div className="rate_chat">
					<iframe id="tradingview_dd6f1"
						src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_dd6f1&amp;symbol=COINBASE%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=www.bitlunaroptions.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD"
						style={{ width: "100%", height: "100%", margin: "0 !important", padding: "0 !important" }}
						allowtransparency="true" scrolling="no" allowFullScreen="" frameBorder="0"
						title="coinrate">
					</iframe>

					{/* <div style={{height:"256px", backgroundColor: "#FFFFFF", overflow:hidden, box-sizing: border-box, border: 1px solid #56667F, border-radius: 4px, text-align: right, line-height:14px, font-size: 12px, font-feature-settings: normal, text-size-adjust: 100%, box-shadow: inset 0 -20px 0 0 #56667F, padding: 0px, margin: 0px, width: 100%,}}><div style="height:236px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=3&pref_coin_id=1505&graph=yes" width="100%" height="232px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div> */}

					{/* <CoinWidget ele="#mydiv" id="mydiv" link={`<div style="height:256px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;"><div style="height:236px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=3&pref_coin_id=1505&graph=no" width="100%" height="232px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>`} /> */}

					{/* <img src={quickDetails} width="100%" height="100%" alt=""/> */}
				</div>
			</div>
		</Container>
	)
}
const mapStateToProps = ({ rates }) => ({
	rates: rates
})

const mapDispatchToProps = {
	fetchAllRates: fetchAllRatesActionCreator
}
export default connect(mapStateToProps, mapDispatchToProps)(MasterAdminRates)
