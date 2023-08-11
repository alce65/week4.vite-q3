import { createContext } from 'react';
import { useTasks } from '../hooks/use.tasks';
import { useNotes } from '../hooks/use.notes';

export type AppContextStructure = {
  sample: string;
  tasksContext: ReturnType<typeof useTasks>;
  notesContext: ReturnType<typeof useNotes>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
