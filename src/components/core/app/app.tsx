/**
 * Componente de React
 * Función con un nombre en PascalCase
 * devuelve un elemento tsx
 */
import { MenuOption } from '../../../types/menu.options';
import { AppRoutes } from '../app.routes/app.routes';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function App() {
  const menuOptions: MenuOption[] = [
    { path: '/home', label: 'Inicio' },
    { path: '/todo', label: 'ToDo' },
    { path: '/about', label: 'Acerca de' },
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
        <AppRoutes options={menuOptions}></AppRoutes>
      </main>
      <Footer brand="ISDI" menuOptions={socialOptions}></Footer>
    </>
  );
}
