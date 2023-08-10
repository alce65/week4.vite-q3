import { SyntheticEvent, useContext } from 'react';
import { TaskNoId } from '../../../model/task';
import { AppContext } from '../../../context/app.context';

export function Add() {
  const {
    tasksContext: { add },
  } = useContext(AppContext);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    const newTask: TaskNoId = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      owner: (form.elements.namedItem('owner') as HTMLInputElement).value,
      isCompleted: false,
    };

    console.log(newTask);
    add(newTask);
  };

  return (
    <form aria-label="add-task" onSubmit={handleSubmit}>
      <legend>Añadir tarea</legend>
      <input
        type="text"
        name="title"
        placeholder="Describe la tarea"
        required
      />
      <input
        type="text"
        name="owner"
        placeholder="Responsable de la tarea"
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
