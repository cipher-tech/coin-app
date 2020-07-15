import React from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HashRouter as Router, Switch, Route, withRouter, } from "react-router-dom"
//HashRouter BrowserRouter 

import reduxStore from "./reduxStore"
import { GlobalStyle, Container } from './components/styledComponents';
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
import { ContactUs } from './pages/contact/contactUs';
import Faq from './pages/faq/faq';
import { Foot, Navbar } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MasterDashboardLayout from './pages/masterAdmin/masterDashboardLayout';
import MasterAdminRates from "./pages/masterAdmin/rates/rates";
import AdminUsers from './pages/masterAdmin/users/users';
import UserVerify from './pages/admin/verify/verify';
import VerifyUsers from './pages/masterAdmin/verify/verifyUsers';
import DepositRequest from './pages/admin/depositRequest/depositRequest';
import WidthdrawlRequest from './pages/admin/widthdrawlRequest/widthdrawlRequest';
import AdminDepositRequest from './pages/masterAdmin/depositRequest/depositRequest';
import AdminWidthdrawlRequest from './pages/masterAdmin/widthdrawlRequest/widthdrawlRequest';
import AboutUS from './pages/aboutUs/aboutUs';
import Policies from './pages/policies/policies';
import UpdateUserInfo from './pages/admin/updateUserInfo/updateUserInfo';
import ContextProvider from './context/contextProvider';

const theme = {
	colorPrimary: "#581b98",
	colorPrimaryLight: "#304D71",
	colorSecondary: "#FB921E",
	colorSecondaryDark: "#e47800",
	colorWhite: "#FFFFFF",
	colorDark: "#707070",
	colorLight: "#EEEEEE",
	colorSuccess: "#3CC480",
	colorError: "#ff1a45",
	colorYellow: "#F4FA9C",

	font: {
		xxlarge: "5rem",
		xLarge: "4rem",
		vLarge: "3.5rem",
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
		<Provider store={createStore(reduxStore)}>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<ThemeProvider theme={theme}>
						<GlobalStyle />
						<ContextProvider>
							<Container>
								<Route path={["/", "/contact", "/faq", "/about", "/policies"]} exact>
									<Navbar />
									<Route exact path={routes.public.home} component={Main} />
									<Route exact path={routes.public.contact} component={ContactUs} />
									<Route exact path={routes.public.faq} component={Faq} />
									<Route exact path={routes.public.about} component={AboutUS} />
									<Route exact path={routes.public.policies} component={Policies} />
									<Foot />
								</Route>
								<Route exact path={routes.public.login} component={withRouter(Login)} />
								<Route exact path={routes.public.signUp} component={withRouter(SignUp)} />
								<Route path="/admin/:path?" exact>
									<DashboardLayout>
										<Switch>
											<Route exact path={routes.admin.index} component={Dashboard} />
											<Route exact path={routes.admin.rates} component={Rates} />
											<Route exact path={routes.admin.sellBitcoin} component={AdminSellBitcoin} />
											<Route exact path={routes.admin.sellGiftcard} component={AdminSellGiftCard} />
											<Route exact path={routes.admin.transcation} component={AdminTransaction} />
											<Route exact path={routes.admin.verify} component={withRouter(UserVerify)} />
											<Route exact path={routes.admin.deposit} component={DepositRequest} />
											<Route exact path={routes.admin.widthdrawl} component={WidthdrawlRequest} />
											<Route exact path={routes.admin.updateInfo} component={UpdateUserInfo} />
										</Switch>
									</DashboardLayout>
								</Route>
								<Route path={"/master-admin/:path?"} exact>
									<MasterDashboardLayout>
										<Switch>
											<Route exact path={routes.masterAdmin.index} component={Dashboard} />
											<Route exact path={routes.masterAdmin.users} component={AdminUsers} />
											<Route exact path={routes.masterAdmin.rates} component={MasterAdminRates} />
											<Route exact path={routes.masterAdmin.sellBitcoin} component={AdminSellBitcoin} />
											<Route exact path={routes.masterAdmin.sellGiftcard} component={AdminSellGiftCard} />
											<Route exact path={routes.masterAdmin.transcation} component={AdminTransaction} />
											<Route exact path={routes.masterAdmin.verify} component={VerifyUsers} />
											<Route exact path={routes.masterAdmin.deposit} component={AdminDepositRequest} />
											<Route exact path={routes.masterAdmin.widthdrawl} component={AdminWidthdrawlRequest} />
										</Switch>
									</MasterDashboardLayout>
								</Route>
							</Container>
						</ContextProvider>

					</ThemeProvider>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
