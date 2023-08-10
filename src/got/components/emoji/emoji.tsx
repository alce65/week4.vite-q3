import { Character } from '../../model/character';

type Props = {
  character: Character;
};

export function Emoji({ character }: Props) {
  console.log(character.name);

  return (
    <>
      <i className="emoji">???</i>
    </>
  );
}
