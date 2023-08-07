import { MenuOption } from '../../types/menu.options';
import './menu.scss';

type Props = { menuOptions: MenuOption[] };

export function Menu({ menuOptions }: Props) {
  return (
    <nav>
      <ul>
        {menuOptions.map((item) => (
          <li key={item.label}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
