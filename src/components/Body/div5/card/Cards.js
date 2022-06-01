import React from 'react';
import "./Cards.css"

const Cards = (props) => {
    return (
        <div className='bodyDiv5'>
            <h2>{props.title}</h2>
            <p>Some text about {props.title}</p>
        </div>
    )
}

export default Cards
