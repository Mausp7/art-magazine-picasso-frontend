import React, { useState } from "react";
import "./Card.css";

const lorem =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident architecto similique voluptatem qui eaque perferendis nulla, consectetur esse omnis enim voluptatibus corporis vel beatae nobis id voluptate deleniti error!";
const src =
	"https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg";

const Card = ({
	title = "Lorem Ipsum",
	description = "No description available",
	date_display = "date",
	source = src,
	artist_display = "artist",
	place_of_origin = "place",
}) => {
	const toggleFavs = () => {
		console.log("adding this pic to favs");
	};

	const [readMore, setReadMore] = useState(false);

	const extraContent = (
		<div>
			<p className="extra-content">
				{" "}
				Artist: {artist_display} <br></br>
				Year:{date_display}, {place_of_origin}
			</p>
		</div>
	);
	const linkName = readMore ? "Show Less << " : "Show More >> ";

	return (
		<div className="Card">
			<div className="Card-text">
				<h2 className="Card-heading">{title}</h2>

				<a
					className="read-more-link"
					onClick={() => {
						setReadMore(!readMore);
					}}
				>
					<h2>{linkName}</h2>
				</a>
				{readMore && extraContent}
			</div>
			<img className="Card-img" src={source} alt={title} />
			<button className="Card-btn-favs" onClick={() => toggleFavs()}>
				😍
			</button>
		</div>
	);
};

export default Card;
