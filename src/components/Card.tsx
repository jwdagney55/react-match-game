import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { GameCard } from '../classes/GameCard'


import '../Game-Board.css';


export function Card({cardNum, cards, setMyCards} : {cardNum: number, cards: GameCard[], setMyCards:(cards:GameCard[]) => void}): JSX.Element {
    console.log("in Card");

    const handleClick = () => {
        console.log(cards.map(c => c.cardPic));
        let newCards: GameCard[] = [...cards];
        newCards[cardNum-1] = {...newCards[cardNum-1], isFlipped: !newCards[cardNum-1].isFlipped}
        console.log(newCards.map(c => c.cardPic));
        setMyCards(newCards)
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
            <ReactCardFlip isFlipped = {!cards[cardNum-1].isFlipped} flipDirection="vertical"  >
                {FindNum(cards[cardNum-1].cardNum)}

                {FindCard(cards[cardNum-1].cardPic)}

            </ReactCardFlip>
        </td>
        
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