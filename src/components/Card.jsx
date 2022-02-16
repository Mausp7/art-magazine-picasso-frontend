import React from 'react';
import './Card.css';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident architecto similique voluptatem qui eaque perferendis nulla, consectetur esse omnis enim voluptatibus corporis vel beatae nobis id voluptate deleniti error!';
const src = 'https://static01.nyt.com/images/2018/03/02/arts/design/02picasso-print/01picasso1-superJumbo.jpg';

const Card = ({title = 'Lorem Ipsum', description = lorem, source=src}) => {
  return (
    <div className='Card'>
        <div className='Card-text'>
            <h2 className='Card-heading'>{title}</h2>
            <p className='Card-description'>{description}</p>
        </div>
        <img className="Card-img" src={source} alt={title} />
    </div>
  )
}

export default Card