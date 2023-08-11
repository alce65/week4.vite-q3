import { useCallback, useMemo, useState } from 'react';
import { Note, NoteNoId } from '../model/note';
import { ApiNotesRepository } from '../services/api.notes.repository';

const urlBase = 'http://localhost:3000/notes';

export function useNotes() {
  const repo = useMemo(() => new ApiNotesRepository(urlBase), []);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loadState, setLoadState] = useState('Loading');

  // Ejecuta el callback
  // una vez al renderizar el componente por vez primera
  // cada vez que cambie una variable del array de dependencias
  const loadNotes = useCallback(async () => {
    try {
      const notes = await repo.getAll();
      setNotes(notes);
      setLoadState('Loaded');
      console.log('Load notes');
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [repo]);

  const add = async (note: NoteNoId) => {
    try {
      // 1 - Asíncrono : repo
      const fullNote = await repo.create(note);
      // 2 - Síncrono: State
      setNotes([...notes, fullNote]);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const update = async (note: Note) => {
    try {
      // 1 - Asíncrono : repo
      const updatedNote = await repo.update(note.id, note);
      // 2 - Síncrono: State
      const newNotes = notes.map((item) =>
        item.id !== note.id ? item : updatedNote
      );
      setNotes(newNotes);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const erase = async (note: Note) => {
    try {
      await repo.delete(note.id);
      setNotes(notes.filter((item) => item.id !== note.id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    notes,
    loadState,
    loadNotes,
    add,
    update,
    erase,
  };
}
