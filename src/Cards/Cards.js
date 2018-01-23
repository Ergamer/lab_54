import React from 'react';

const suits = {
  H: 'hearts',
  C: 'clubs',
    D: 'diams',
    S: 'spades',
};

const Card = (props) => {
    const suitClass = suits[props.suit];

    const cardClasses = `card rank-${props.rank} ${suitClass}`;
    return (
        <div className={cardClasses}>
            <span className="rank">{props.rank}</span>
            <span className="suit">&spades;</span>
        </div>
    )
};
export default Card;


