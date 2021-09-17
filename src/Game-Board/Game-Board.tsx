import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '../components/Card';


import './Game-Board.css';

function GameBoard() {
    //Set state of card to be not flipped

    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            <table>
                <tr>
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                </tr>
            </table>

        </div>
    )
}

export default GameBoard;