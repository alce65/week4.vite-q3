import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ButtonAll } from './button.all';

describe('Given the componente ButtonAll', () => {
  describe('When we render it', () => {
    const selectAllMock = jest.fn();
    render(<ButtonAll selectAll={selectAllMock}></ButtonAll>);

    test('Then method "selectAll" should be call if user click the component', async () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      expect(selectAllMock).toHaveBeenCalled();
    });
  });
});
