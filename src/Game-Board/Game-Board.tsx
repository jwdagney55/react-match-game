import React from 'react';
import ReactCardFlip from 'react-card-flip';

import './Game-Board.css';

function GameBoard() {
    //Set state of card to be not flipped
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>

            <table>
                <tr>
                    <th>Row 1</th>
                    <th>Row 2</th>
                </tr>
                <tr>
                    <td>Card 1</td>
                    <td>Card 2</td>
                </tr>
            </table>

        </div>
    )
}

export default GameBoard;