import { ReactNode } from 'react';
import { AppContext, AppContextStructure } from './app.context';
import { useTasks } from '../hooks/use.tasks';

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    sample: 'Soy el contexto de App',
    tasksContext: useTasks(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
