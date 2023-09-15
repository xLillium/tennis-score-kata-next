import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import TennisGame from '../app/page';

describe('TennisGame', () => {
    it('should render the initial score 0-0', () => {
        const { getByText } = render(<TennisGame />);
        expect(getByText('0 - 0')).toBeInTheDocument();
    });
});

