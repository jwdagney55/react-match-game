import React from 'react';
import '../Game-Board.css'

function ScoreCard(score: {totalScore: number}): JSX.Element{

    return (
        <div>
            <p className="ScoreCard">Score 0/{score.totalScore}</p>
        </div>
    )
}

export default ScoreCard;