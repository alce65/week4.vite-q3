import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './footer';

jest.mock('../menu/menu');

describe('Given the componente Footer', () => {
  describe('When we render it', () => {
    const brand = 'Test';
    render(<Footer brand={brand} menuOptions={[]}></Footer>);
    test('the component should be in the document', () => {
      const element = screen.getByText(brand);
      expect(element).toBeInTheDocument();
    });
  });
});
