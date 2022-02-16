import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Collection from "./components/Collection";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<Search />} />
				<Route path="/collection" element={<Collection />} />		    
			</Routes>
		</Router>
	);
}

export default App;
