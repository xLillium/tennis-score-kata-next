import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TennisGame from '../app/page';

describe('TennisGame', () => {
    it('should render the initial score 0-0', () => {
        const { getByText } = render(<TennisGame />);
        expect(getByText('0 - 0')).toBeInTheDocument();
    });

    it('should update the score for player 1', () => {
        const { getByText } = render(<TennisGame />);
        fireEvent.click(getByText('+1 Point for Player 1'));
        expect(getByText('15 - 0')).toBeInTheDocument();
    });
});

