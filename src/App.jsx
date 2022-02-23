import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";
import Collection from "./components/Collection";

const App = () => {
	const [user, setUser] = useState("");
	const api = "https://picasso.sloppy.zone/api/"//"http://localhost:5000/api/"

	return (
		<Router>
			<Header user={user} setUser={setUser} />
			<Routes>
				<Route path="/" exact element={<Search api={api} />} />
				<Route path="/register" element={<Register api={api} />} />
				<Route path="/login" element={<Login api={api} setUser={setUser} />} />
				<Route path="/collection" element={<Collection api={api} />} />
			</Routes>
		</Router>
	);
};

export default App;
