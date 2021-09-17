import React from 'react';
import ReactCardFlip from 'react-card-flip';


import '../Game-Board/Game-Board.css';

function Card(stuff: {cardNum: string; word: string}): JSX.Element {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
            <td onClick={handleClick}>{stuff.cardNum}</td>

            <td onClick={handleClick}>{stuff.word}</td>
        </ReactCardFlip>
    )
}

export default Card;