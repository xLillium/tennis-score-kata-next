import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TennisGame from '../app/page';

describe('TennisGame', () => {
    it('should render the initial score 0-0', () => {
        const { getByText } = render(<TennisGame />);
        expect(getByText('0 - 0')).toBeInTheDocument();
    });

    it('should update the score to 15 - 0 when player 1 scores', () => {
        const { getByText } = render(<TennisGame />);
        fireEvent.click(getByText('+1 Point for Player 1'));
        expect(getByText('15 - 0')).toBeInTheDocument();
    });

    it('should update the score to 30 - 0 when player 1 scores twice', () => {
        const { getByText } = render(<TennisGame />);
        fireEvent.click(getByText('+1 Point for Player 1'));
        fireEvent.click(getByText('+1 Point for Player 1'));
        expect(getByText('30 - 0')).toBeInTheDocument();
    });

    it('should update the score to 40 - 0 when player 1 scores thrice', () => {
        const { getByText } = render(<TennisGame />);
        fireEvent.click(getByText('+1 Point for Player 1'));
        fireEvent.click(getByText('+1 Point for Player 1'));
        fireEvent.click(getByText('+1 Point for Player 1'));
        expect(getByText('40 - 0')).toBeInTheDocument();
    });


});

