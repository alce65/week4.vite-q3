/* eslint-disable no-case-declarations */
// Reducer función pura
// recibe: un estado + una action
// devuelve: el nuevo estado

import { Note } from '../model/note';
import { NoteAction } from './notes.action.creators';
import { actionTypeNames } from './notes.action.names';

export type NotesState = Note[];

export function notesReducer(
  state: NotesState,
  action: NoteAction
): NotesState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Note[];

    case actionTypeNames.create:
      return [...state, action.payload as Note];

    case actionTypeNames.update:
      return state.map((item) =>
        item.id !== (action.payload as Note).id
          ? item
          : (action.payload as Note)
      );

    case actionTypeNames.delete:
      return state.filter((item) => item.id !== (action.payload as number));

    default:
      return { ...state };
  }
}
