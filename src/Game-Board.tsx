import React from 'react';
import Card from './components/Card';

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
            let arrIdx = Math.floor(Math.random() * size);
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
    let sportCards: string[] = ['baseball', 'basketball', 'tennis', 'hockey'];
    let picOrder:number[] = selectOrder(sportCards.length * 2);
    console.log(picOrder);

    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            
            <table>
                <tbody>
                    <tr> 
                        <td><Card cardNum={1} word={sportCards[picOrder[0]]} /></td>
                        <td><Card cardNum={2} word={sportCards[picOrder[1]]} /></td>
                        <td><Card cardNum={3} word={sportCards[picOrder[2]]} /></td>
                        <td><Card cardNum={4} word={sportCards[picOrder[3]]} /></td>
                    </tr>
                    <tr>
                        <td><Card cardNum={5} word={sportCards[picOrder[4]]} /></td>
                        <td><Card cardNum={6} word={sportCards[picOrder[5]]} /></td>
                        <td><Card cardNum={7} word={sportCards[picOrder[6]]} /></td>
                        <td><Card cardNum={8} word={sportCards[picOrder[7]]} /></td>
                    </tr>
                </tbody>                 
            </table>
        </div>
    )
}

export default GameBoard;