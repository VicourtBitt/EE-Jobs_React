import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./view/HomePage";
import ContactPage from "./view/ContactPage";

function App() {
  	return (
    	<BrowserRouter>
      		<Routes>
			  <Route path="/" element={<HomePage />} />
			  <Route path="/contact" element={<ContactPage />} />
      		</Routes>
    	</BrowserRouter>
  	);
}

export default App;
