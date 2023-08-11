import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuOption } from '../../../types/menu.options';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../../../pages/home/home'));
const TodoPage = lazy(() => import('../../../pages/todo/todo'));
const GotPage = lazy(() => import('../../../pages/got/got'));
const NotesPage = lazy(() => import('../../../pages/notes/notes'));
const AboutPage = lazy(() => import('../../../pages/about/about'));

type Props = {
  options: MenuOption[];
};
export function AppRoutes({ options }: Props) {
  const paths = options.map((item) => item.path);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path={paths[0]} element={<HomePage></HomePage>}></Route>
        <Route path={paths[1]} element={<TodoPage></TodoPage>}></Route>
        <Route path={paths[2]} element={<GotPage></GotPage>}></Route>
        <Route path={paths[3]} element={<NotesPage></NotesPage>}></Route>
        <Route path={paths[4]} element={<AboutPage></AboutPage>}></Route>
        <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </Suspense>
  );
}
