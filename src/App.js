import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Container } from './components/styledComponents';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"

import Main from './pages/main';
import routes from './navigation/routes';
import Dashboard from './pages/admin/dashboard';
import DashboardLayout from './pages/admin/dashboardLayout';
import Rates from "./pages/admin/rates/rates"
import AdminSellBitcoin from './pages/admin/sellBitcion/sellBitcion';
import AdminSellGiftCard from './pages/admin/sellGiftCard/sellGiftCard';
import AdminTransaction from './pages/admin/transaction/transaction';
import Login from './pages/auth/login/login';
import SignUp from './pages/auth/signup/signup';

const theme = {
	colorPrimary: "#304D71",
	colorPrimaryLight: "#304D71",
	colorSecondary: "#FB921E",
	colorSecondaryDark: "#e47800",
	colorWhite: "#FFFFFF",
	colorDark: "#707070",
	colorLight: "#EEEEEE",
	colorSuccess: "#3CC480",
	colorYellow: "#F4FA9C",
	// colorPurple: "#E049EA",
	// colorInfo: "#F4FA9C",
	// colorBg: "#322F55",
	font: {
		xxlarge: "5rem",
		xLarge: "4rem",
		larger: "3rem",
		xlarge: "2.2rem",
		large: "2rem",
		medium: "1.6rem",
		small: "1.4rem",
		xsmall: "1.0rem",
		xxsmall: ".5rem",

		mainFont: "Montserrat",
		mainFont1: "ProximaNovaSoftW03-Regular",
		extra: "Segoe UI",
		offSet: "Mongolian Baiti"
	},
	breakPoints: {
		bpLargest: "1900px", //1700px
		bpxxLarge: "93.75rem", // 1500px
		bpxLarge: "69.375rem", // 1110px
		bpLarge: "56.25rem", //900px
		bpMedium2: "50rem", //800px
		bpMedium: "43.75rem",  //700px
		bpSmall2: "40.625rem",  //650px
		bpSmall: "37.5rem",//600px
		bpxSmall: "400px"
	}
}

AOS.init()

function App() {
	return (
		<Router>
			<Switch>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Container>
						<Route exact path={routes.public.home} component={Main} />
						<Route exact path={routes.public.login} component={Login} />
						<Route exact path={routes.public.signUp} component={SignUp} />
						<Route path="/admin/:path?" exact>
							<DashboardLayout>
								<Switch>
									<Route exact path={routes.admin.index} component={Dashboard} />
									<Route exact path={routes.admin.rates} component={Rates} />
									<Route exact path={routes.admin.sellBitcoin} component={AdminSellBitcoin} />
									<Route exact path={routes.admin.sellGiftcard} component={AdminSellGiftCard} />
									<Route exact path={routes.admin.transcation} component={AdminTransaction} />
								</Switch>
							</DashboardLayout>
						</Route>
					</Container>
				</ThemeProvider>
			</Switch>
		</Router>

	);
}

export default App;
