import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
/* import { Navbar } from "react-bootstrap";
 */
import { search } from "./api";
import SearchPic from "./SearchPic";
import SearchResults from "./SearchResults";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

function Search() {
	const [results, setResults] = useState(null);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Clear the results if the user gets rid of the search query
		if (!(query || query.length)) {
			setResults(null);
			return;
		}

		// Don't bother searching for anything less than 3 characters
		if (query.length < 3) {
			return;
		}

		// Otherwise, start a search
		setLoading(true);
		search(
			query,
			"id",
			"title",
			"image_id",
			"thumbnail",
			"artist_display",
			"description",
			"date_display",
			"place_of_origin"
		)
			.then((searchResults) => {
				if (searchResults && searchResults.data) {
					setResults(searchResults.data);
				}
			})
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [query]);

	return (
		<div className="Search">
			<header>
					<h1>Find Art You Love</h1>
					<SearchPic
							query={query}
							onChange={(e) => setQuery(e.target.value)}
					/>
				{/* <Navbar bg="dark" variant="dark">
					<Navbar.Brand>Atrsy</Navbar.Brand>
				</Navbar> */}
				{/* <div className="painting-background Jumbotron">
					<Container className="text-center">
						<h1>Find Art You Love</h1>
						<SearchPic
							query={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</Container>
				</div> */}
			</header>
			{error ? (
				<p>Unable to retrieve results.</p>
			) : (
				<SearchResults results={results} loading={loading} />
			)}
		</div>
	);
}

export default Search;
