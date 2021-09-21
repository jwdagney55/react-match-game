import React from 'react';
import Card from '../components/Card';
import logo from '../images/baseball.png'
import basket from '../images/basketball.png'



import './Game-Board.css';

function selectOrder(size:number): number[] {
    console.log("selecting order")
    let ret:number[] = new Array(size);
    for (let index = 0; index < size; index++) {
        ret[index] = -1;
    }
    for (let picIdx = 0; picIdx < (size/2) - 1; picIdx++) {
        let picPlaced:number = 0;
        while(picPlaced < 2){
            let arrIdx = (Math.random() * 1000) % size;
            if(ret[arrIdx] === -1){
                ret[arrIdx] = picIdx;
                picPlaced++;
            }
        }   
    }
    let finalPlaced:number = 0;
    let idx:number = 0;
    while(finalPlaced < 2 && idx < size){
        if(ret[idx] === -1){
            ret[idx] = size/2 - 1;
            finalPlaced++;
        }
        idx++;
    }
    return ret;
}

function GameBoard() {
    //Set state of card to be not flipped
    //Hard code the cards in for now
    console.log("in gameboard")
    let sportCards: string[] = ['baseball', 'basketball', 'tennis'];
    let picOrder = selectOrder(6);
    console.log(picOrder);

    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            
            <table> 
                 <tr> 
                    <td><Card cardNum={1} word={sportCards[0]} /></td>
                    <td><Card cardNum={2} word={sportCards[1]} /></td>
                    <td><Card cardNum={3} word={sportCards[2]} /></td>
                </tr>
                <tr>
                    <td><Card cardNum={4} word={sportCards[3]} /></td>
                    <td><Card cardNum={5} word={sportCards[4]} /></td>
                    <td><Card cardNum={6} word={sportCards[5]} /></td>
                </tr>
            </table>
        </div>
    )
}

export default GameBoard;