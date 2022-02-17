import React from 'react';
import './Card.css';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident architecto similique voluptatem qui eaque perferendis nulla, consectetur esse omnis enim voluptatibus corporis vel beatae nobis id voluptate deleniti error!';
const src = 'https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg';

const Card = ({title = 'Lorem Ipsum', description = 'No description available', source=src}) => {
  const toggleFavs = () => {
    console.log('adding this pic to favs')
  }

  return (
    <div className='Card'>
        <div className='Card-text'>
            <h2 className='Card-heading'>{title}</h2>
            <p className='Card-description'>{description}</p>
        </div>
        <img className="Card-img" src={source} alt={title} />
        <button className='Card-btn-favs' onClick={() => toggleFavs()}>😍</button>
    </div>
  )
}

export default Card