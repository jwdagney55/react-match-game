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
                    <td><Card cardNum={"1"} word={"apple"} /></td>
                    <td><Card cardNum={"2"} word={"apple"} /></td>
                    <td><Card cardNum={"3"} word={"orange"} /></td>
                </tr>
                <tr>
                    <td><Card cardNum={"4"} word={"banana"} /></td>
                    <td><Card cardNum={"5"} word={"banana"} /></td>
                    <td><Card cardNum={"6"} word={"orange"} /></td>
                </tr>
            </table>
        </div>
    )
}

export default GameBoard;