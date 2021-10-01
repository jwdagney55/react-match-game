import React from 'react';
import { Card } from './components/Card';
import { GameCard } from './classes/GameCard';
import ScoreCard from './components/ScoreCard'
import { Form } from 'react-bootstrap';

import './Game-Board.css';

function selectOrder(size:number): number[] {
    //console.log("selecting order")
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
    //Hard code the cards in for now
    let [theScore, setTheScore] = React.useState<number>(0);
    let sportCards: string[] = ['baseball', 'basketball', 'tennis', 'hockey'];
    let picOrder:number[] = selectOrder(sportCards.length * 2);
    //console.log("Picture Order: ", picOrder);
    let cardsData:GameCard[] = []; 

    for (let index = 0; index < picOrder.length; index++) {
        cardsData.push(new GameCard(index+1, sportCards[picOrder[index]]))
    }
    let [myCards, setMyCards] = React.useState<GameCard[]>(cardsData)
    //console.log(myCards.map(c => c.cardPic));

    //print out the state of the cards
    //for(let i = 0; i < 8; i++){
        //console.log("Card", myCards[i].cardNum, ": ");
        //console.log("Flip State: ", myCards[i].isFlipped, '\tFound Match: ', myCards[i].foundMatch); 
    //}

    let firstRow:GameCard[] = myCards.slice(0,sportCards.length);
    let secondRow:GameCard[] = myCards.slice(-sportCards.length);
    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>

            <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                <Form.Check type="checkbox" label="Baseball"/>
                <Form.Check type="checkbox" label="Basketball"/>
                <Form.Check type="checkbox" label="Hockey"/>
                <Form.Check type="checkbox" label="Tennis"/>
            </Form.Group>

            <table>
                <tbody>
                    <tr> 
                        {firstRow.map(card => {
                            return (
                                <td><Card cardNum = {card.cardNum} cards = {myCards} setMyCards = {setMyCards} setTheScore = {setTheScore}/></td>
                            )
                        })
                    }
                    </tr>
                    <tr>
                        {secondRow.map(card => {
                            return (
                                <td><Card cardNum = {card.cardNum} cards = {myCards} setMyCards = {setMyCards} setTheScore = {setTheScore}/></td>
                            )
                        })}
                    </tr>
                </tbody>                 
            </table>
            <ScoreCard playerScore = {theScore} totalScore={myCards.length} />
        </div>
    )
}

export default GameBoard;