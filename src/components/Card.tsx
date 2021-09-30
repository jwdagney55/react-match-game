import { createReadStream } from 'fs';
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { GameCard } from '../classes/GameCard'


import '../Game-Board.css';

const checkCards = (cards:GameCard[]): GameCard[] => {
    let nFlipped:number = 0;
    let idxFlipped:number[] = [];
    for(let i = 0; i < cards.length; i++){
        if(cards[i].isFlipped && !cards[i].foundMatch){
            nFlipped++;
            idxFlipped.push(i);
        }
    }
    console.log("After first loop idxFlipped=", idxFlipped);
    for(let i = 0; i < idxFlipped.length; i++){
        for(let j = i + 1; j < idxFlipped.length; j++){
            if(cards[idxFlipped[i]].cardPic === cards[idxFlipped[j]].cardPic){
                console.log("Found Match!", cards[idxFlipped[i]].cardPic, ' = ', cards[idxFlipped[j]].cardPic)
                cards[idxFlipped[i]] = {...cards[idxFlipped[i]], foundMatch:true};
                cards[idxFlipped[j]] = {...cards[idxFlipped[j]], foundMatch:true};
                idxFlipped.splice(i, 1);
                idxFlipped.splice(j-1, 1);
            }
        }
    }
    console.log("After second loop idxFlipped=", idxFlipped);
    if(idxFlipped.length >= 3){
        for(let i = 0; i < idxFlipped.length; i++){
            cards[idxFlipped[i]] = {...cards[idxFlipped[i]], isFlipped:false};
            console.log("Card at idx: ", idxFlipped[i], " flip state is: ", cards[idxFlipped[i]].isFlipped)
        }
    }
    return cards;
}


export function Card({cardNum, cards, setMyCards} : {cardNum: number, cards: GameCard[], setMyCards:(cards:GameCard[]) => void}): JSX.Element {
    //console.log("in Card");

    const handleClick = () => {
        let newCards: GameCard[] = [...cards];
        newCards[cardNum-1] = {...newCards[cardNum-1], isFlipped: !newCards[cardNum-1].isFlipped};
        newCards = [...checkCards(newCards)];
        setMyCards(newCards)
    }

    const FindNum = (num:number): JSX.Element => {
        return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/Card" + num + ".png"} onClick={handleClick} alt={num.toString()} />;
    }

    const FindCard = (sport:string): JSX.Element => {
        //Attempting to catch an error if the file does not exist, but don't know how to do that.
        try {
            //console.log("trying");
            return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/sports/" + sport + ".png"} onClick={handleClick} alt={sport} />;
        } catch (error) {
            console.log(error, "found error");
            return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/notfound.png"} onClick={handleClick} alt={sport} />;
        }
    }
    return (
        <ReactCardFlip isFlipped = {cards[cardNum-1].isFlipped} flipDirection="vertical"  >
            {FindNum(cards[cardNum-1].cardNum)}
            
            {FindCard(cards[cardNum-1].cardPic)}
        </ReactCardFlip>
        
        //<p>Hello1</p>
    )
}

/*
function Card(stuff: {cardNum: number; word: string}): JSX.Element {
    console.log("In Card");
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }


    const FindNum = (num:number): JSX.Element => {
        return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/Card" + num + ".png"} onClick={handleClick} alt={num.toString()} />;
    }

    const FindCard = (sport:string): JSX.Element => {
        //Attempting to catch an error if the file does not exist, but don't know how to do that.
        try {
            console.log("trying");
            return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/sports/" + sport + ".png"} onClick={handleClick} alt={sport} />;
        } catch (error) {
            console.log(error, "found error");
            return <img className="Game-Card" src={process.env.PUBLIC_URL + "/images/notfound.png"} onClick={handleClick} alt={sport} />;
        }
    }

    return (
        <td>
            <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical" >
            {FindNum(stuff.cardNum)}

            {FindCard(stuff.word)}
            </ReactCardFlip>
        </td>
        
        
    )
}
*/

//export function Card;