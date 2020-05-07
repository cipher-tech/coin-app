import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Container } from './components/styledComponents';
import Main from './pages/main';
import AOS from 'aos'
import 'aos/dist/aos.css'

const theme = {
	colorPrimary: "#304D71",
	colorSecondary: "#FB921E",
	colorWhite: "#FFFFFF",
	colorDark: "#707070",
	colorLight: "#EEEEEE",
	// colorSuccess: "#30E3CA",
	colorYellow: "#F4FA9C",
	// colorPurple: "#E049EA",
	// colorInfo: "#F4FA9C",
	// colorBg: "#322F55",
	font: {
		xxlarge: "5rem",
		xLarge:  "4rem",
		larger:  "3rem",
		xlarge: "2.2rem",
		large: "2rem",
		medium: "1.6rem",
		small: "1.4rem",
		xsmall: "1.0rem",
		xxsmall: ".5rem",
 
		mainFont: "Montserrat",
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
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container>
				<Main />
			</Container>
		</ThemeProvider>

	);
}

export default App;
