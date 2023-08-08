import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';

describe('Given the componente Info', () => {
  describe('When we render it', () => {
    const nunGets = 12;
    render(<Info numGents={nunGets}></Info>);
    test('The component should render the number of gents: 12', () => {
      const element = screen.getByText(/12/);
      expect(element).toBeInTheDocument();
    });
  });
});
