import React from 'react';
import '../Game-Board.css'

function ScoreCard(scores: {playerScore: number, totalScore: number}): JSX.Element{

    return (
        <div>
            <p className="ScoreCard">Score {scores.playerScore}/{scores.totalScore}</p>
        </div>
    )
}

export default ScoreCard;