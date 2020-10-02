import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards, selectAllCards } from './cardSlice'
import { Spinner, Alert } from 'react-bootstrap'
import './card.scss'
import Card from './Card'

const CardsList = () => {

    const dispatch = useDispatch()
    
    const cards = useSelector(selectAllCards)
    const cardStatus = useSelector((state) => state.cards.status)
    const error = useSelector((state) => state.cards.error)

    useEffect(() => {
        if (cardStatus === 'idle') {
            dispatch(fetchCards())
          }
    }, [cardStatus, dispatch])

    return (
        <div>
            <h1>الجمعيات الخيرية</h1>
            <div className='wrapper'>
                {cardStatus === 'loading' ? 
                    <Spinner animation="border" variant='light'/> : cardStatus === 'error' ? <Alert variant='danger' >{error}</Alert> :
                        cards.map(card => <Card key={card.pkID} title={card.Name} imgUrl={card.Logo} />)}
            </div>
        </div>
    )
}

export default CardsList
