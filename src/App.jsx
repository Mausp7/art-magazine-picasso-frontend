import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";
import Collection from "./components/Collection";

const App = () => {
	const api = "https://picasso.sloppy.zone/api/"//"http://localhost:5000/api/"

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<Search api={api} />} />
				<Route path="/register" element={<Register api={api} />} />
				<Route path="/login" element={<Login api={api} />} />
				<Route path="/collection" element={<Collection api={api} />} />
			</Routes>
		</Router>
	);
};

export default App;
