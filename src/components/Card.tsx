import React from 'react';
import ReactCardFlip from 'react-card-flip';


import '../Game-Board/Game-Board.css';

function Card(): JSX.Element {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical">
            <td onClick={handleClick}>Front</td>

            <td onClick={handleClick}>Back</td>
        </ReactCardFlip>
    )
}

export default Card;