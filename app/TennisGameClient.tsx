
'use client'

import React, { useState } from 'react';

export function TennisGameClient() {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [gameState, setGameState] = useState("");

    const givePointToPlayer1 = () => {
        if (player1Score === 0) {
            setPlayer1Score(15);
        } else if (player1Score === 15) {
            setPlayer1Score(30);
        } else if (player1Score === 30) {
            setPlayer1Score(40);
        } else {
            setGameState("Game Player 1");
        }
    }

    const givePointToPlayer2 = () => {
        if (player2Score === 0) {
            setPlayer2Score(15);
        } else if (player2Score === 15) {
            setPlayer2Score(30);
        } else if (player2Score === 30) {
            setPlayer2Score(40);
        } else {
            setGameState("Game Player 2");
        }
    }
    return (
        <div>
            <div>
                {gameState ? gameState : `${player1Score} - ${player2Score}`}
            </div>
            <button onClick={givePointToPlayer1}>+1 Point for Player 1</button>
            <button onClick={givePointToPlayer2}>+1 Point for Player 2</button>
        </div>
    );
}
