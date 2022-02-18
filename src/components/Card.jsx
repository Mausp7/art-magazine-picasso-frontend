import React, { useState } from "react";
import "./Card.css";
import { FaPlusSquare } from "react-icons/fa";

const lorem =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit.";
const src =
	"https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg";


const Card = ({
	title = "Lorem Ipsum",
	description = "No description available",
	date_display = "date",
	source = src,
	artist_display = "artist",
	place_of_origin = "place",
  addClickEvent
}) => {

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
    <div className='Card'>
        <div className='Card-text'>
            <h2 className='Card-heading' onClick={addClickEvent}>{title}</h2>
            <a
					    className="read-more-link"
					    onClick={() => {
						  setReadMore(!readMore);
					  }}
				    >
					  <h2>{linkName}</h2>
				    </a>
				    {readMore && extraContent}
            <FaPlusSquare className='Card-btn-favs' style={{color: "#458db6", transform: "scale(2.5)", cursor: "pointer"}} onClick={addClickEvent}/>
            {/* <p className='Card-description'>{description}</p> */}
        </div>
        <img className="Card-img" src={source} alt={title}/>
    </div>
  )
}

export default Card;
