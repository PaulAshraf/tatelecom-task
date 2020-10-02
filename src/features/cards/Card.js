import React from 'react'

const Card = (props) => {

    const title = props.title
    const imgUrl = props.imgUrl

    return (
        <div className='card'>
            <img src={imgUrl} alt={title} />
            <div className='name'>{title}</div>
            <div className='donate'>تبرع الأن</div>
        </div>
    )
}

export default Card
