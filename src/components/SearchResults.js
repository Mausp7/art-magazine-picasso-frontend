import { artworkImageUrl } from "./api";
import Card from './Card';
import axios from "axios";
import message from "./message"
import Spinner from "./Spinner";

function SearchResults({ results, loading, api }) {

	const saveToCollection = async (artist, title, url) => {
		try {
			await axios.post(`${api}user/collection`, {
				artist: artist.split(",")[0],
				title,
				url
			},
			{
				headers: {
					"Authorization": localStorage.getItem("sessionId")
                }
            });
			message("Added to My Collection");
        } catch (error) {
            message("Could not add!");
        };
	};

	if (!(results && results.length)) {
		return null;
	}

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="SearchResults">
			{results.map((result) => {
				return (
					<Card
						key={result.id}
						title={result.title}
						description={result.description}
						date_display={result.date_display}
						artist_display={result.artist_display}
						place_of_origin={result.place_of_origin}
						source={artworkImageUrl(result.image_id, 250)}
						addClickEvent={() => saveToCollection(result.artist_display, result.title, artworkImageUrl(result.image_id, 250))}
					/>
				);
			})}
		</div>
	);
}

export default SearchResults;
