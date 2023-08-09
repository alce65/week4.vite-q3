import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './menu';
import { MenuOption } from '../../../types/menu.options';
import { MemoryRouter as Router } from 'react-router-dom';

// jest.mock('../menu/menu');

describe('Given the componente Menu', () => {
  describe('When we render it', () => {
    const menuOptionsMock: MenuOption[] = [{ path: '/', label: 'Test' }];
    render(
      <Router>
        <Menu menuOptions={menuOptionsMock}></Menu>
      </Router>
    );

    test('the component should be in the document', () => {
      const element = screen.getByText(menuOptionsMock[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
