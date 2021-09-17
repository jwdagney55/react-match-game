import React from 'react';
import ReactCardFlip from 'react-card-flip';

//import * as card1 from './images/Card1.png'
import * as baseball from './images/baseball.jpg'
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
            <img src={baseball} alt="Card One" width="10%" />
            <table>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
                <tr>
                    <td><img src={"./images/Card1.png"} alt="Card One" /></td>
                    <td>Card 2</td>
                </tr>
            </table>

        </div>
    )
}

export default GameBoard;