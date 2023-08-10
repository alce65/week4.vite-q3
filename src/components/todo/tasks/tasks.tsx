import { useContext, useEffect } from 'react';
import { Add } from '../add/add';
import { Card } from '../card/card';
import './tasks.scss';
import { AppContext } from '../../../context/app.context';

export function Tasks() {
  console.log('Ejecutando Tasks');

  const {
    tasksContext: { tasks, loadState, loadTasks },
  } = useContext(AppContext);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <section id="tasks" className="tasks">
      <h2>Tareas</h2>
      <div className="add-container">
        <Add></Add>
      </div>

      {loadState === 'Loading' && <p>Loading...</p>}

      {loadState === 'Loaded' && (
        <ul className="cards-container">
          {tasks.map((item) => (
            <Card key={item.id} task={item}></Card>
          ))}
        </ul>
      )}
    </section>
  );
}
