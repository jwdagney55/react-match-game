import React from 'react';
import ReactCardFlip from 'react-card-flip';
//import * as SPORTS from '/images/sports'
/*
import baseball from '/images/baseball.png'
import basketball from '/images/basketball.png'
import tennis from '/images/tennis.png'
*/


import '../Game-Board.css';


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
        
        <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical" >
            {FindNum(stuff.cardNum)}

            {FindCard(stuff.word)}
        </ReactCardFlip>
        
    )
}


export default Card;