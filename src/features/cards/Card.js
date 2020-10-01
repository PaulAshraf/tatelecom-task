import React from 'react'

const Card = (props) => {

    const title = props.title
    const imgUrl = props.imgUrl

    return (
        <div className='card'>
            <img src={imgUrl} alt={title} />
            {title}
            <div className='donate'>
                تبرع الأن
            </div>
        </div>
    )
}

export default Card
