import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TennisGame from '../app/page';

describe('TennisGame', () => {
    it('should display "0 - 0" when game starts', () => {
        const { getByText } = render(<TennisGame />);
        expect(getByText('0 - 0')).toBeInTheDocument();
    });

    it('should display "15 - 0" when Player 1 scores', () => {
        const { getByText } = render(<TennisGame />);
        pointForPlayer1(1, getByText);
        expect(getByText('15 - 0')).toBeInTheDocument();
    });

    it('should display "30 - 0" when Player 1 scores twice', () => {
        const { getByText } = render(<TennisGame />);
        pointForPlayer1(2, getByText);
        expect(getByText('30 - 0')).toBeInTheDocument();
    });

    it('should display "40 - 0" when Player 1 scores thrice', () => {
        const { getByText } = render(<TennisGame />);
        pointForPlayer1(3, getByText);
        expect(getByText('40 - 0')).toBeInTheDocument();
    });

    it('should display "Game Player 1" when Player 1 scores after 40-0', () => {
        const { getByText } = render(<TennisGame />);
        pointForPlayer1(4, getByText);
        expect(getByText('Game Player 1')).toBeInTheDocument();
    });

});

function pointForPlayer1(times, getByText) {
    for (let i = 0; i < times; i++) {
        fireEvent.click(getByText('+1 Point for Player 1'));
    }
}
