import { Character } from '../../model/character';

type Props = {
  character: Character;
};

export function Communicate({ character }: Props) {
  const img = `img/${character.name.toLowerCase()}.jpg`;
  return (
    <div className="comunications">
      <p className="comunications__text display-1">{character.message}</p>
      <img
        className="comunications__picture"
        src={img}
        alt={`Imagen de ${character.name} ${character.family}`}
      />
    </div>
  );
}
