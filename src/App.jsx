import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";
import Collection from "./components/Collection";

const App = () => {
	const [user, setUser] = useState("");
	const url = "" // "/art-magazine-picasso-frontend"
	const api = "https://picasso.sloppy.zone/api/"//"http://localhost:5000/api/"

	return (
		<Router>
			<Header user={user} setUser={setUser} url={url} />
			<Routes>
				<Route path={`${url}/`} exact element={<Search url={url} api={api} />} />
				<Route path={`${url}/register`} element={<Register url={url} api={api} />} />
				<Route path={`${url}/login`} element={<Login url={url} api={api} setUser={setUser} />} />
				<Route path={`${url}/collection`} element={<Collection url={url} api={api} />} />
			</Routes>
		</Router>
	);
};

export default App;
