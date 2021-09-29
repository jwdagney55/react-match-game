import React from 'react';
import Card from './components/Card';
import GameCard from './classes/GameCard';

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

/*
function placeCards(cards:GameCard[]): JSX.Element {
    return (
        {cards.map((card: GameCard) => {
            return <td><Card {...card} /></td>
        })
    }
}
*/


function GameBoard() {
    //Set state of card to be not flipped
    //Hard code the cards in for now
    let sportCards: string[] = ['baseball', 'basketball', 'tennis', 'hockey'];
    let picOrder:number[] = selectOrder(sportCards.length * 2);
    console.log(picOrder);

    let Cards:GameCard[] = []; 

    for (let index = 0; index < picOrder.length; index++) {
        Cards.push(new GameCard(index+1, sportCards[picOrder[index]]))
    }
    let firstRow:GameCard[] = Cards.slice(0,sportCards.length);
    let secondRow:GameCard[] = Cards.slice(-sportCards.length);
    const testCard:GameCard = new GameCard(1,'baseball');
    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            
            <table>
                <tbody>
                    <tr> 
                        {firstRow.map(card => {
                            return (
                                <td><Card {...card}/></td>
                            )
                        })
                    }
                    </tr>
                    <tr>
                        {secondRow.map(card => {
                            return (
                                <td><Card {...card}/></td>
                            )
                        })}
                    </tr>
                </tbody>                 
            </table>
        </div>
    )
}

export default GameBoard;