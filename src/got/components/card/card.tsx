import { Children, ReactNode } from 'react';
import { Character } from '../../model/character';

type Props = {
  character: Character;
  children: ReactNode;
};

export function Card({ character, children }: Props) {
  const aChildren = Children.toArray(children);
  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`img/${character.name.toLowerCase()}.jpg`}
          alt="Nombre y familia del personaje"
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">Nombre y familia</h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: X años</li>
              <li>
                Estado:
                {character.isAlive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            {aChildren[0]}
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        {aChildren[1]}
      </div>
    </li>
  );
}
