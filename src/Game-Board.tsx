import React from 'react';
import { Card } from './components/Card';
import { GameCard } from './classes/GameCard';

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
    console.log("Picture Order: ", picOrder);
    let cardsData:GameCard[] = []; 

    for (let index = 0; index < picOrder.length; index++) {
        cardsData.push(new GameCard(index+1, sportCards[picOrder[index]]))
    }
    let [myCards, setMyCards] = React.useState<GameCard[]>(cardsData)
    console.log(myCards.map(c => c.cardPic));

    const handleClick = () => {
        for (let i = 0; i < picOrder.length; i++) {
            //Check the number of flipped cards
            console.log("Hellow World")
            for(let j = i+1; j < picOrder.length; j++){

            const element = picOrder[i];
            }  
        }
    }

    
    let firstRow:GameCard[] = myCards.slice(0,sportCards.length);
    let secondRow:GameCard[] = myCards.slice(-sportCards.length);
    return(
        <div className="Game-Board">
            <h2>Match Game!</h2>
            
            <table>
                <tbody>
                    <tr> 
                        {firstRow.map(card => {
                            return (
                                <td onClick={handleClick}><Card cardNum = {card.cardNum} cards = {myCards} setMyCards = {setMyCards}/></td>
                            )
                        })
                    }
                    </tr>
                    {/*
                    <tr>
                        {secondRow.map(card => {
                            return (
                                <td><Card cardNum={card.cardNum}
                                cardPic={card.cardPic}
                                isFlipped={card.isFlipped}
                                foundMatch={card.foundMatch}
                                getCardNum={card.getCardNum}
                                getcardPic={card.getcardPic}
                                getIsFlipped={card.getIsFlipped}
                                getfoundMatch={card.getfoundMatch}
                                setCardNum={card.setCardNum}
                                setCardPic={card.setCardPic}
                                setIsFlipped={card.setIsFlipped}
                                setfoundMatch={card.setfoundMatch}/></td>
                            )
                        })}
                    </tr>
                    */}
                </tbody>                 
            </table>
        </div>
    )
}

export default GameBoard;