/* import { divide } from "lodash"; */
import { Row, Spinner } from "react-bootstrap";
/* import { Col } from "react-bootstrap"; */
import { artworkImageUrl } from "./api";
import Card from './Card';
import http from "axios";

function SearchResults({ results, loading }) {

	const saveToCollection = async (title, url) => {
		console.log(title);
		console.log(url);
		await http.post('http://localhost:5000/api/user/1', {
		  artist: "Artist",
		  title,
		  url
		})
		alert("Added to My Collection!");
	};

	if (loading) {
		return (
			<Row>
				<Spinner className="mx-auto" animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Row>
		);
	}

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
		<div>
			{results.map((result) => {
				return <Card title={result.title} source={artworkImageUrl(result.image_id, 250)} addClickEvent={() => saveToCollection(result.title, artworkImageUrl(result.image_id, 250))}/>
			})}
		</div>

	);
}

export default SearchResults;
