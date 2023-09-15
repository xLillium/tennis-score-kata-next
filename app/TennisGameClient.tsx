
'use client'

import React, { useState } from 'react';

export function TennisGameClient() {
    const [player1Score, setPlayer1Score] = useState(0);

    const givePointToPlayer1 = () => {
        if (player1Score === 0) {
            setPlayer1Score(15);
        } else if (player1Score === 15) {
            setPlayer1Score(30);
        } else {
            setPlayer1Score(40);
        }
    }

    return (
        <div>
            <div>{player1Score} - 0</div>
            <button onClick={givePointToPlayer1}>+1 Point for Player 1</button>
        </div>
    );
}
