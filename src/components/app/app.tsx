/**
 * Componente de React
 * Función con un nombre en PascalCase
 * devuelve un elemento tsx
 */

import { MenuOption } from '../../types/menu.options';
import { Counter } from '../counter/counter';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function App() {
  const menuOptions: MenuOption[] = [
    { path: '/', label: 'Home' },
    { path: '/products.html', label: 'Productos' },
    { path: '/about.html', label: 'Acerca de' },
  ];

  const socialOptions: MenuOption[] = [
    { path: '/twitter', label: 'Twitter' },
    { path: '/linkedin', label: 'Linkedin' },
    { path: '/instagram', label: 'Instagram' },
  ];

  return (
    <>
      <Header>
        <Menu menuOptions={menuOptions}></Menu>
      </Header>
      <main>
        <Counter></Counter>
      </main>
      <Footer brand="ISDI" menuOptions={socialOptions}></Footer>
    </>
  );
}
