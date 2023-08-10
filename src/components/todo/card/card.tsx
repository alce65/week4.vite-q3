import { useContext } from 'react';
import { Task } from '../../../model/task';
import { AppContext } from '../../../context/app.context';

type Props = {
  task: Task;
};
export function Card({ task }: Props) {
  const {
    tasksContext: { update, erase },
  } = useContext(AppContext);

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
