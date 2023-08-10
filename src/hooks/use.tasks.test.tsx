import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useTasks } from './use.tasks';
import { Task } from '../model/task';
import { ApiTasksRepository } from '../services/api.tasks.repository';

describe('Given custom hook useTasks', () => {
  const mockTask: Task = {} as Task;

  ApiTasksRepository.prototype.getAll = jest
    .fn()
    .mockResolvedValue([{ id: 1 }]);
  function TestComponent() {
    const { tasks, loadState, loadTasks, add, update, erase } = useTasks();
    return (
      <>
        <h1>Test Component</h1>
        <button role="button" onClick={() => loadTasks()}>
          1
        </button>
        <button role="button" onClick={() => add(mockTask)}>
          2
        </button>
        <button role="button" onClick={() => update(mockTask)}>
          3
        </button>
        <button role="button" onClick={() => erase(mockTask)}>
          4
        </button>
        <p>LoadState: {loadState}</p>
        <p>Element 1 ID: {tasks[0]?.id}</p>
      </>
    );
  }
  describe('When the component run the hook', () => {
    beforeEach(() => {
      render(<TestComponent></TestComponent>);
    });

    test('The component should be in the document', () => {
      const h1Element = screen.getByRole('heading');
      expect(h1Element).toBeInTheDocument();
    });

    test('If we click button 1 new state should be render', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[0]);
      const loadElement = await screen.findByText('LoadState: Loaded');
      expect(loadElement).toBeInTheDocument();
    });
  });
});
