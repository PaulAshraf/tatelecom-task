import React from 'react'

const Card = (props) => {

    let title = props.title
    const imgUrl = props.imgUrl

    if(title.split(' ').length > 4){
        title = title.split(' ').slice(0,3).join(' ') + ' ...'
    }

    return (
        <div className='ngo-card'>
            <img src={imgUrl} alt={title} />
            <div className='name'>{title}</div>
            <div className='donate'>تبرع الأن</div>
        </div>
    )
}

export default Card
