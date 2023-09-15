import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TennisGame from '../app/page';

describe('TennisGame', () => {
    let getByText;

    beforeEach(() => {
        const rendered = render(<TennisGame />);
        getByText = rendered.getByText;
    });

    it('should display "0 - 0" when game starts', () => {
        expect(getByText('0 - 0')).toBeInTheDocument();
    });

    describe('Player 1 winning the perfect game', () => {
        it('should display "15 - 0" when Player 1 scores', () => {
            scorePointsFor(1, 1);
            expect(getByText('15 - 0')).toBeInTheDocument();
        });

        it('should display "30 - 0" when Player 1 scores twice', () => {
            scorePointsFor(1, 2);
            expect(getByText('30 - 0')).toBeInTheDocument();
        });

        it('should display "40 - 0" when Player 1 scores thrice', () => {
            scorePointsFor(1, 3);
            expect(getByText('40 - 0')).toBeInTheDocument();
        });

        it('should display "Game Player 1" when Player 1 scores after 40-0', () => {
            scorePointsFor(1, 4);
            expect(getByText('Game Player 1')).toBeInTheDocument();
        });
    });

    describe('Player 2 winning the perfect game', () => {
        it('should display "0 - 15" when Player 2 scores', () => {
            scorePointsFor(2, 1);
            expect(getByText('0 - 15')).toBeInTheDocument();
        });

        it('should display "0 - 30" when Player 2 scores twice', () => {
            scorePointsFor(2, 2);
            expect(getByText('0 - 30')).toBeInTheDocument();
        });

        it('should display "0 - 40" when Player 2 scores thrice', () => {
            scorePointsFor(2, 3);
            expect(getByText('0 - 40')).toBeInTheDocument();
        });
    });

    describe('Game reaching Deuce', () => {
        it('should display "Deuce" when both players score thrice', () => {
            scorePointsFor(1, 3);
            scorePointsFor(2, 3);
            expect(getByText('Deuce')).toBeInTheDocument();
        });

        it('should display "Deuce" even if both players score more than thrice but remain equal', () => {
            scorePointsFor(1, 4);
            scorePointsFor(2, 4);
            expect(getByText('Deuce')).toBeInTheDocument();
        });
    });

    describe('Game reaching Advantage', () => {
        it('should display "Advantage Player 1" when Player 1 scores one more point after Deuce', () => {
            scorePointsFor(1, 3);
            scorePointsFor(2, 3);
            scorePointsFor(1, 1);  // Player 1 takes the lead after deuce
            expect(getByText('Advantage Player 1')).toBeInTheDocument();
        });

        it('should display "Advantage Player 2" when Player 2 scores one more point after Deuce', () => {
            scorePointsFor(1, 3);
            scorePointsFor(2, 3);
            scorePointsFor(2, 1);  // Player 2 takes the lead after deuce
            expect(getByText('Advantage Player 2')).toBeInTheDocument();
        });
    });

    function scorePointsFor(player, times) {
        const buttonText = `+1 Point for Player ${player}`;
        for (let i = 0; i < times; i++) {
            fireEvent.click(getByText(buttonText));
        }
    }
});
