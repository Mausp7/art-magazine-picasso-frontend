import React from 'react';
import './Card.css';
import { FaPlusSquare } from "react-icons/fa";


const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
const src = 'https://static01.nyt.com/images/2018/03/02/arts/design/02picasso-print/01picasso1-superJumbo.jpg';

const Card = ({title, description = lorem, source=src, addClickEvent}) => {
  return (
    <div className='Card'>
        <div className='Card-text'>
            <h2 className='Card-heading' onClick={addClickEvent}>{title}</h2>
            <FaPlusSquare className='Card-btn-favs' style={{color: "#458db6", transform: "scale(2.5)", cursor: "pointer"}} onClick={addClickEvent}/>
            <p className='Card-description'>{description}</p>
        </div>
        <img className="Card-img" src={source} alt={title}/>
    </div>
  )
}

export default Card