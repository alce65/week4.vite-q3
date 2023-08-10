import { useEffect, useMemo, useState } from 'react';
import { Character } from '../../model/character';
import { Communicate } from '../communicate/communicate';
import { Card } from '../card/card';
import { Info } from '../info/info';
import { Emoji } from '../emoji/emoji';
import { ApiCharactersRepository } from '../../services/api.characters.repository';

type State = {
  characters: Character[];
  isTalking: boolean;
  selectedCharacter: Character | null;
};

const url = 'http://localhost:4444/characters';
export function Characters() {
  const [state, setState] = useState<State>({
    characters: [],
    isTalking: false,
    selectedCharacter: null,
  });

  const repo = useMemo(() => new ApiCharactersRepository(url), []);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        // Asíncrona
        const newCharacters = await repo.getAll();
        // Síncrona
        setState({ ...state, characters: newCharacters });
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    loadCharacters();
  }, [repo, state]);

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {state.characters.map((item) => (
            <Card key={item.id} character={item}>
              [<Info character={item}></Info>,<Emoji character={item}></Emoji>]
            </Card>
          ))}
        </ul>
      </div>
      {state.selectedCharacter && (
        <Communicate character={state.selectedCharacter}></Communicate>
      )}
    </>
  );
}
