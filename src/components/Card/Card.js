import React from 'react'
import './Cards.scss';
import Rating from '@mui/material/Rating';

const Card = () => {
  return (
    <div className='card__wrapper diff'>
        <div className='card__container'>
            <div className="card__image">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/>
            </div>
            <div className="card__title">
                <p>Margherita</p>
            </div>
            <div className="card__subtitle">
                <p>Starts from Rs 99</p>
            </div>
            <div className="rating">
                <Rating name="read-only" value={2} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Card