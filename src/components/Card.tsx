import React from 'react';
import ReactCardFlip from 'react-card-flip';
//import * as SPORTS from '/images/sports'
/*
import baseball from '/images/baseball.png'
import basketball from '/images/basketball.png'
import tennis from '/images/tennis.png'
*/

import card1 from '../images/Card1.png'
import card2 from '../images/Card2.png'
import card3 from '../images/Card3.png'
import card4 from '../images/Card4.png'
import card5 from '../images/Card5.png'
import card6 from '../images/Card6.png'
import notFound from '../images/notfound.png'

import '../Game-Board.css';


function Card(stuff: {cardNum: number; word: string}): JSX.Element {
    console.log("In Card");
    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    /*
    const indexImgImport = (): void => {
        for(let x in SPORTS){
            console.log(typeof(x), "is ", x);
            console.log(1);
        }

    }
    */

    const FindNum = (num:number): JSX.Element => {
        switch(num){
            case (1):
                return <img className = "Game-Card" src={card1} onClick={handleClick} alt="Card1"/>;
            case (2):
                return <img className = "Game-Card" src={card2} onClick={handleClick} alt="Card2"/>;
            case (3):
                return <img className = "Game-Card" src={card3} onClick={handleClick} alt="Card3"/>;
            case (4):
                return <img className = "Game-Card" src={card4} onClick={handleClick} alt="Card4"/>;
            case (5):
                return <img className = "Game-Card" src={card5} onClick={handleClick} alt="Card5"/>;
            case (6):
                return <img className = "Game-Card" src={card6} onClick={handleClick} alt="Card6"/>;
        }
        return <img src={notFound} onClick={handleClick} alt="not found"/>;
    }

    const FindCard = (sport:string): JSX.Element => {
        switch(sport){
            case ("tennis"):
                console.log("tennis card")
                return <img className = "Game-Card" src={process.env.PUBLIC_URL + "/images/tennis.png"} onClick={handleClick} alt="tennis"/>;
            case ("baseball"):
                console.log("baseball card")
                return <img className = "Game-Card" src={process.env.PUBLIC_URL + "/images/baseball.png"} onClick={handleClick} alt="baseball"/>;
            case ("basketball"):
                console.log("basketball card")
                return <img className = "Game-Card" src={process.env.PUBLIC_URL + "/images/basketball.png"} onClick={handleClick} alt="basketball"/>;
        }
        console.log("no card")
        return <img className = "Game-Card" src={notFound} onClick={handleClick} alt="not found"/>;
    }

    return (
        
        <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical" >
            {FindNum(stuff.cardNum)}

            {FindCard(stuff.word)}
        </ReactCardFlip>
        
       /*
       <ReactCardFlip isFlipped = {isFlipped} flipDirection="vertical" >
           <img className = "Game-Card" src={notFound} onClick={handleClick} alt="not found"/>;

           <img className = "Game-Card" src='/../src/images/tennis.png' onClick={handleClick} alt="not found"/>;
       </ReactCardFlip>
       */
    )
}


export default Card;