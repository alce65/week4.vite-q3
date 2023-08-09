import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppRoutes } from './app.routes';
import { MenuOption } from '../../types/menu.options';
import { MemoryRouter as Router } from 'react-router-dom';

const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock('../../pages/home/home', () => MockedHome);

const MockedTodo = jest.fn().mockReturnValue(<h1>Todo</h1>);
jest.mock('../../pages/todo/todo', () => MockedTodo);

const MockedAbout = jest.fn().mockReturnValue(<h1>About</h1>);
jest.mock('../../pages/about/about', () => MockedAbout);

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = [
    { path: '/home', label: '' },
    { path: '/todo', label: '' },
    { path: '/about', label: '' },
  ];
  describe('When we render it with the route "/home"', () => {
    test('the component should render HomePage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/home']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'Home' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render it with the route "/todo"', () => {
    test('the component should render TodoPage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/todo']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'Todo' });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When we render it with the route "/about"', () => {
    test('the component should render AboutPage', async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/about']} initialIndex={0}>
            <AppRoutes options={optionsMock}></AppRoutes>
          </Router>
        );
      });

      const element = screen.getByRole('heading', { name: 'About' });
      expect(element).toBeInTheDocument();
    });
  });
});
