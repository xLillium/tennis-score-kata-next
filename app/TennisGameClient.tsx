'use client'

import React, { useState } from 'react';


export function TennisGameClient() {
    const [scoreP1, setScoreP1] = useState(0);
    const [scoreP2, setScoreP2] = useState(0);

    const computeGameState = () => {
        if (scoreP1 >= 4 && (scoreP1 - scoreP2) >= 2) {
            return "Game Player 1";
        } else if (scoreP2 >= 4 && (scoreP2 - scoreP1) >= 2) {
            return "Game Player 2";
        }

        if (scoreP1 == 3 && scoreP2 == 3) {
            return "Deuce";
        }

        return `${convertScore(scoreP1)} - ${convertScore(scoreP2)}`;
    }

    const convertScore = (score: number) => {
        switch (score) {
            case 0:
                return "0";
            case 1:
                return "15";
            case 2:
                return "30";
            case 3:
                return "40";
            default:
                return "";
        }
    }

    const givePointToPlayer = (player: number) => {
        if (player === 1) {
            setScoreP1(scoreP1 + 1);
        } else {
            setScoreP2(scoreP2 + 1);
        }
    };

    return (
        <div>
            <div>
                {computeGameState()}
            </div>
            <button onClick={() => givePointToPlayer(1)}>+1 Point for Player 1</button>
            <button onClick={() => givePointToPlayer(2)}>+1 Point for Player 2</button>
        </div>
    );
}
