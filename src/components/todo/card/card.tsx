/* eslint-disable no-unused-vars */

import { Task } from '../../../model/task';

type Props = {
  task: Task;
  erase: (task: Task) => void;
  update: (task: Task) => void;
};
export function Card({ task, erase, update }: Props) {
  const handleChange = () => {
    task.isCompleted = !task.isCompleted;
    update(task);
  };

  const onClick = () => erase(task);

  return (
    <li>
      <span>{task.title}</span>
      <span>{task.owner}</span>
      <span>
        <input
          type="checkbox"
          name="is-completed"
          checked={task.isCompleted}
          onChange={handleChange}
        />
        <span role="button" className="button" onClick={onClick}>
          🗑️
        </span>
      </span>
    </li>
  );
}
