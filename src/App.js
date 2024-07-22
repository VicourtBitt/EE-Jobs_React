import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";
import HomeMainBox from "./Components/HomeMainBanner/HomeMainBanner";
import HomeBannerBox from "./Components/HomeBanner/HomeBanner";
import BannerMainContent from "./Components/BannerMainContent/BannerMainContent";
import BannerContent from "./Components/BannerContent/BannerContent";

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
					<BannerMainContent
						flexD=""
						w=""
					/>
				</HomeMainBox>

				<HomeBannerBox>
				<BannerContent
						flexD="row-reverse"
						w="600px"
					/>
				</HomeBannerBox>
				
			</AppContainer>
    	</>
  	);
}

export default App;
