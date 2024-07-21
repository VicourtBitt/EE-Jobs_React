import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
import Header from "./Components/Header/Header";

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
			</AppContainer>
    	</>
  	);
}

export default App;
