import { createContext } from 'react';
import { useTasks } from '../hooks/use.tasks';

export type AppContextStructure = {
  sample: string;
  tasksContext: ReturnType<typeof useTasks>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
