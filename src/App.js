// import { ThemeProvider } from "styled-components";
import BodyDefault from "./layout/BodyDefault";
import MainScreen from "./views/MainScreen";

// Create ThemeProvider later

function App() {
	return (
    	<>
			<BodyDefault>
				<MainScreen />
			</BodyDefault>
    	</>
  	);
}

export default App;
