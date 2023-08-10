import { Character } from '../../model/character';

type Props = {
  character: Character;
};

export function Info({ character }: Props) {
  return (
    <ul className="list-unstyled">
      {character.reignYears && <li>Años de reinado: {character.reignYears}</li>}

      <li>Arma: XXX</li>
      <li>Destreza: X</li>
      <li>Peloteo: X</li>
      <li>Asesora a: X</li>
      <li>Sirve a: X</li>
    </ul>
  );
}
