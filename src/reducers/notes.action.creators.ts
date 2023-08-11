// Action = objeto
// Propiedad type -> obligatoria
// Propiedad payload (data) -> opcional

import { Note } from '../model/note';
import { actionTypeNames } from './notes.action.names';

type Keys = keyof typeof actionTypeNames;

export type NoteAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Note[] | Note | number;
};

// CRUD

export const loadNotesActionCreator = (data: Note[]): NoteAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const createNoteActionCreator = (data: Note): NoteAction => {
  return {
    type: actionTypeNames.create,
    payload: data,
  };
};

export const updateNoteActionCreator = (data: Note): NoteAction => {
  return {
    type: actionTypeNames.update,
    payload: data,
  };
};

export const deleteNoteActionCreator = (data: Note['id']): NoteAction => {
  return {
    type: actionTypeNames.delete,
    payload: data,
  };
};
