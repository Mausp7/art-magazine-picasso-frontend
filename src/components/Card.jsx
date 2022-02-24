import React, { useState } from "react";
import "./Card.css";
import { FaPlusSquare, FaInfoCircle } from "react-icons/fa";

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
		<div className="extra-content">
			<h2 className='Card-heading'>{title.slice(0, 79)}{title.length > 80 ? '...' : ''}</h2>
			<p className="extra-content">
				{" "}
				Artist: {artist_display.slice(0, 129)}{artist_display.length > 130 ? '...' : ''} <br></br>
				Year: {date_display}
			</p>
		</div>
	);

  return (
    <div className='Card'>
        <div className='Card-text'>
				    {readMore && extraContent}
			<div className="Card-buttons">
				<FaInfoCircle className="Card-btn-info" style={{color: "#dc5252", transform: "scale(2.5)", cursor: "pointer"}} onClick={() => {
						  setReadMore(!readMore);
					  }}/>
				{localStorage.getItem("sessionId") && <FaPlusSquare className='Card-btn-favs' style={{color: "#458db6", transform: "scale(2.5)", cursor: "pointer"}} onClick={addClickEvent}/>}
			</div>
        </div>
		<img className="Card-img" style={readMore ? {opacity: '0.5'} : {opacity: '1'}} src={source} alt={title}/>
    </div>
  )
}

export default Card;
