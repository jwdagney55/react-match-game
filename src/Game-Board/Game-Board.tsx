import React from 'react';
import Card from '../components/Card';
import logo from '../images/baseball.png'
import basket from '../images/basketball.png'



import './Game-Board.css';

function GameBoard() {
    //Set state of card to be not flipped
    //Hard code the cards in for now
    let sportCards: string[] = ['../images/baseball.png', '../images/basketball.png', '../images/tennis.png'];


    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            
            <table> 
                 <tr> 
                    <td><Card cardNum={1} word={"tennis"} /></td>
                    <td><Card cardNum={2} word={"tennis"} /></td>
                    <td><Card cardNum={3} word={"basketball"} /></td>
                </tr>
                <tr>
                    <td><Card cardNum={4} word={"baseball"} /></td>
                    <td><Card cardNum={5} word={"baseball"} /></td>
                    <td><Card cardNum={6} word={"basketball"} /></td>
                     </tr>
            </table>
        </div>
    )
}

export default GameBoard;