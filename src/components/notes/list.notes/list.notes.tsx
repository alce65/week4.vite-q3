import { useContext, useEffect } from 'react';
import { Add } from '../add/add';
import { Card } from '../card/card';
import './list.notes.scss';
import { AppContext } from '../../../context/app.context';

export function ListNotes() {
  console.log('Ejecutando Notes');

  const {
    notesContext: { notes, loadState, loadNotes },
  } = useContext(AppContext);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <section id="notes" className="notes">
      <h2>Notas</h2>
      <div className="add-container">
        <Add></Add>
      </div>

      {loadState === 'Loading' && <p>Loading...</p>}

      {loadState === 'Loaded' && (
        <ul className="cards-container">
          {notes.map((item) => (
            <Card key={item.id} note={item}></Card>
          ))}
        </ul>
      )}
    </section>
  );
}
