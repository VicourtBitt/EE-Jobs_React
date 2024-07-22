import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import HomeMainBox from "./Components/HomeMainBanner/HomeMainBanner";
import BannerContent from "./Components/BannerContent/BannerContent.styled";

// Create ThemeProvider later

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
`

function App() {
	return (
    	<>
			<AppContainer>
				<Header />
				<HomeMainBox>
					<BannerContent
						flexD=""
						w=""
					/>
				</HomeMainBox>
			</AppContainer>
    	</>
  	);
}

export default App;
