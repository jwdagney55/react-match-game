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
                    <Card cardNum={"1"} word={"apple"} />
                    <Card cardNum={"2"} word={"apple"} />
                </tr>
                <tr>
                    <Card cardNum={"3"} word={"banana"} />
                    <Card cardNum={"4"} word={"banana"} />
                </tr>
            </table>

        </div>
    )
}

export default GameBoard;