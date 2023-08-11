import { Note } from '../model/note';
import { actionTypeNames } from './notes.action.names';
import { notesReducer } from './notes.reducer';

test('should first', () => {
  const payloadMock = [{ id: 1 } as Note];
  const result = notesReducer([], {
    type: actionTypeNames.load,
    payload: payloadMock,
  });

  expect(result).toEqual(payloadMock);
});
