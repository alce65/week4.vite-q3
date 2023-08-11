import { useContext } from 'react';
import { Note } from '../../../model/note';
import { AppContext } from '../../../context/app.context';

type Props = {
  note: Note;
};
export function Card({ note }: Props) {
  const {
    notesContext: { update, erase },
  } = useContext(AppContext);

  const handleChange = () => {
    note.isImportant = !note.isImportant;
    update(note);
  };

  const onClick = () => erase(note);

  return (
    <li>
      <span>{note.title}</span>
      <span>{note.author}</span>
      <span>
        <input
          type="checkbox"
          name="is-important"
          checked={note.isImportant}
          onChange={handleChange}
        />
        <span role="button" className="button" onClick={onClick}>
          🗑️
        </span>
      </span>
    </li>
  );
}
