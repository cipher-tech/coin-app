import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Switch, Route, withRouter, } from "react-router-dom"
import { createStore } from 'redux';
//HashRouter BrowserRouter 
import { Provider } from 'react-redux';
import { ContactUs } from './pages/contact/contactUs';
import loadable from '@loadable/component'
import { Foot, Navbar} from './components';
import reduxStore from "./reduxStore"

import { GlobalStyle, Container } from './components/styledComponents';
import routes from './navigation/routes';
import ComingSoon from './pages/comingSoon/comingSoon';

const Main = loadable(() => import('./pages/main'));
const AboutUS = loadable(() => import('./pages/aboutUs/aboutUs'));
const UserRates = loadable(() => import('./pages/userRates/userRates'));
const Dashboard = loadable(() => import('./pages/admin/dashboard'));
const DashboardLayout = loadable(() => import('./pages/admin/dashboardLayout'));
const Rates = loadable(() => import("./pages/admin/rates/rates"));
const AdminSellBitcoin = loadable(() => import('./pages/admin/sellBitcion/sellBitcion'));
const AdminSellGiftCard = loadable(() => import('./pages/admin/sellGiftCard/sellGiftCard'));
const AdminTransaction = loadable(() => import('./pages/admin/transaction/transaction'));
const Login = loadable(() => import('./pages/auth/login/login'));
const SignUp = loadable(() => import('./pages/auth/signup/signup'));
const Faq = loadable(() => import('./pages/faq/faq'));
const MasterDashboardLayout = loadable(() => import('./pages/masterAdmin/masterDashboardLayout'));
const MasterAdminRates = loadable(() => import("./pages/masterAdmin/rates/rates"));
const AdminUsers = loadable(() => import('./pages/masterAdmin/users/users'));
const UserVerify = loadable(() => import('./pages/admin/verify/verify'));
const VerifyUsers = loadable(() => import('./pages/masterAdmin/verify/verifyUsers'));
const DepositRequest = loadable(() => import('./pages/admin/depositRequest/depositRequest'));
const WidthdrawlRequest = loadable(() => import('./pages/admin/widthdrawlRequest/widthdrawlRequest'));
const AdminDepositRequest = loadable(() => import('./pages/masterAdmin/depositRequest/depositRequest'));
const AdminWidthdrawlRequest = loadable(() => import('./pages/masterAdmin/widthdrawlRequest/widthdrawlRequest'));
const Policies = loadable(() => import('./pages/policies/policies'));
const UpdateUserInfo = loadable(() => import('./pages/admin/updateUserInfo/updateUserInfo'));
const ContextProvider = loadable(() => import('./context/contextProvider'));
const Orders = loadable(() => import('./pages/masterAdmin/orders/orders'));
const UserBuySell = lazy(() => import('./pages/userBuySell/userBuySell'));




const theme = {
	colorPrimary: "#041329",
	colorPrimaryLight: "#304D71",
	colorSecondary: "#f25b2e",
	colorSecondaryDark: "#e47800",
	colorTertiary: "#faa84f",
	colorLightBlue: "#97c2ff",
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
	const isComingSoon = false
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Provider store={createStore(reduxStore)}>
				<Router basename={process.env.PUBLIC_URL}>
					<Switch>
						<ThemeProvider theme={theme}>
							<GlobalStyle />
							<ContextProvider>
								<Container> 
									
									{
										isComingSoon ?
											<ComingSoon />
											:
											<Route path={["/", "/contact", "/faq", "/about", "/policies", "/buySell", "/rates"]} exact>
												<Navbar />
												<Route exact path={routes.public.home} component={Main} />
												<Route exact path={routes.public.contact} component={ContactUs} />
												<Route exact path={routes.public.faq} component={Faq} />
												<Route exact path={routes.public.about} component={AboutUS} />
												<Route exact path={routes.public.policies} component={Policies} />
												<Route exact path={routes.public.buy_sell} component={UserBuySell} />
												<Route exact path={routes.public.rates} component={UserRates} />
												<Foot />
											</Route>
									}
									<Route exact path={"login"}  render={() => (<>  window.location.href = "https://m.cjgrandexchange.com/" </>)} />
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
												<Route exact path={routes.masterAdmin.orders} component={Orders} />
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
		</Suspense>
	);
}
export default App;
