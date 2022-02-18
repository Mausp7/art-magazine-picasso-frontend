import { divide } from "lodash";
import { Row, Col, Spinner } from "react-bootstrap";
import { artworkImageUrl } from "./api";
import Card from "./Card";

function SearchResults({ results, loading }) {
	if (loading) {
		return (
			<Row>
				<Spinner className="mx-auto" animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Row>
		);
	}
	console.log(results);
	if (!(results && results.length)) {
		return null;
	}

	return (
		// <Row>
		// 	{results.map((result) => (
		// 		<Col xs={12} md={4} lg={3} key={result.id}>
		// 			<Card>
		// 				<Card.Img
		// 					variant="top"
		// 					src={artworkImageUrl(result.image_id, 250)}
		// 					alt={result.thumbnail?.alt_text}
		// 				/>
		// 				<Card.Body>
		// 					<Card.Title>{result.title}</Card.Title>
		// 				</Card.Body>
		// 			</Card>
		// 		</Col>
		// 	))}
		// </Row>
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
					/>
				);
			})}
		</div>
	);
}

export default SearchResults;
