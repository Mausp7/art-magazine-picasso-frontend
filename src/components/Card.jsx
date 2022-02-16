import React from 'react'

const Card = () => {
  return (
    <div className='Card'>
        <div className='Card-text'>
            <h2 className='Card-heading'>Lorem ipsum</h2>
            <p className='Card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident architecto similique voluptatem qui eaque perferendis nulla, consectetur esse omnis enim voluptatibus corporis vel beatae nobis id voluptate deleniti error!</p>
        </div>
        <img className="Card-img" src="https://static01.nyt.com/images/2018/03/02/arts/design/02picasso-print/01picasso1-superJumbo.jpg" alt="Lorem ipsum" />
    </div>
  )
}

export default Card