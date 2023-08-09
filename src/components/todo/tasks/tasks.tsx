/* eslint-disable no-negated-condition */
import { useEffect } from 'react';
import { Add } from '../add/add';
import { Card } from '../card/card';
import { useTasks } from '../../../hooks/use.tasks';

export function Tasks() {
  console.log('Ejecutando Tasks');

  const { tasks, loadState, loadTasks, add, update, erase } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <section id="tasks" className="tasks">
      <h2>Tareas</h2>
      <div className="add-container">
        <Add addTask={add}></Add>
      </div>

      {loadState === 'Loading' && <p>Loading...</p>}

      {loadState === 'Loaded' && (
        <ul className="cards-container">
          {tasks.map((item) => (
            <Card
              key={item.id}
              task={item}
              update={update}
              erase={erase}
            ></Card>
          ))}
        </ul>
      )}
    </section>
  );
}
