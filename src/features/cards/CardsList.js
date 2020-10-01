import React from 'react'
import data from './data.json'
import './card.scss'
import Card from './Card'

const CardsList = () => {
    return (
        <div>
            <h1>الجمعيات الخيرية</h1>
            <div className='wrapper'>
                {data.data.map(card => <Card title={card.Name} imgUrl={card.Logo} />)}
            </div>
        </div>
    )
}

export default CardsList
