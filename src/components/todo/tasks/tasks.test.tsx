import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import { TaskNoId } from '../../../model/task';
import { AppContext, AppContextStructure } from '../../../context/app.context';
import { Tasks } from './tasks';
import { Add } from '../add/add';
import { Card } from '../card/card';

jest.mock('../add/add');
jest.mock('../card/card');

describe('Given the component Tasks', () => {
  describe('When we render it', () => {
    const loadTaskMock = jest.fn();
    // const mockTask: TaskNoId = {
    //   title: 'Test title',
    //   owner: 'Test owner',
    //   isCompleted: false,
    // };

    const mockContextValue: AppContextStructure = {
      tasksContext: {
        tasks: [{ id: 1 }],
        loadState: '',
        loadTasks: loadTaskMock,
      },
    } as unknown as AppContextStructure;

    test('The component should be in the document before the data load', async () => {
      mockContextValue.tasksContext.loadState = 'Loading';
      render(
        <AppContext.Provider value={mockContextValue}>
          <Tasks></Tasks>
        </AppContext.Provider>
      );
      const h2Element = screen.getByRole('heading');
      expect(h2Element).toBeInTheDocument();
      expect(Add).toHaveBeenCalled();
      const pElement = screen.getByText('Loading...');
      expect(pElement).toBeInTheDocument();
    });

    test('The component should be in the document after the data load', async () => {
      mockContextValue.tasksContext.loadState = 'Loaded';
      render(
        <AppContext.Provider value={mockContextValue}>
          <Tasks></Tasks>
        </AppContext.Provider>
      );
      expect(Card).toHaveBeenCalled();
    });
  });
});
