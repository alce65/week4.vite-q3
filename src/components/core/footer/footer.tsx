import { MenuOption } from '../../../types/menu.options';
import { Menu } from '../menu/menu';

type Props = {
  brand: string;
  menuOptions: MenuOption[];
};

export function Footer({ brand, menuOptions }: Props) {
  return (
    <footer>
      <address>{brand}</address>
      <Menu menuOptions={menuOptions}></Menu>
    </footer>
  );
}
