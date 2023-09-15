
'use client'

import React, { useState } from 'react';

export function TennisGameClient() {
    const [player1Score, setPlayer1Score] = useState(0);

    const givePointToPlayer1 = () => {
        setPlayer1Score(15);
    };

    return (
        <div>
            <div>{player1Score} - 0</div>
            <button onClick={givePointToPlayer1}>+1 Point for Player 1</button>
        </div>
    );
}
