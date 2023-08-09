import { Link } from 'react-router-dom';
import { MenuOption } from '../../../types/menu.options';
import './menu.scss';

type Props = { menuOptions: MenuOption[] };

export function Menu({ menuOptions }: Props) {
  return (
    <nav>
      <ul>
        {menuOptions.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
