import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/Banner';

const mockLocation = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => mockLocation()
}))
describe('Tests banner component.', () => {

    it.each([
        {text: 'Continuos', path:'/'},
        {text: 'Combinatorial', path:'/combinatorial'}
    ])("should display $text title when it calls the path $path.", ({ text, path}) => {
        mockLocation.mockReturnValueOnce({ pathname: path });
        render(
            <Banner/>
        );
        expect(screen.getByText(text, { exact:false })).toBeInTheDocument();
    });

});