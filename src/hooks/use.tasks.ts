import { useCallback, useMemo, useState } from 'react';
import { Task, TaskNoId } from '../model/task';
import { ApiTasksRepository } from '../services/api.tasks.repository';

const urlBase = 'http://localhost:3000/tasks';

export function useTasks() {
  const repo = useMemo(() => new ApiTasksRepository(urlBase), []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loadState, setLoadState] = useState('Loading');

  // Ejecuta el callback
  // una vez al renderizar el componente por vez primera
  // cada vez que cambie una variable del array de dependencias
  const loadTasks = useCallback(async () => {
    try {
      const tasks = await repo.getAll();
      setTasks(tasks);
      setLoadState('Loaded');
      console.log('Load tasks');
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [repo]);

  const add = async (task: TaskNoId) => {
    try {
      // 1 - Asíncrono : repo
      const fullTask = await repo.create(task);
      // 2 - Síncrono: State
      setTasks([...tasks, fullTask]);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const update = async (task: Task) => {
    try {
      // 1 - Asíncrono : repo
      const updatedTask = await repo.update(task.id, task);
      // 2 - Síncrono: State
      const newTasks = tasks.map((item) =>
        item.id !== task.id ? item : updatedTask
      );
      setTasks(newTasks);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const erase = async (task: Task) => {
    try {
      await repo.delete(task.id);
      setTasks(tasks.filter((item) => item.id !== task.id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    tasks,
    loadState,
    loadTasks,
    add,
    update,
    erase,
  };
}
