import { Route, Routes } from 'react-router';
import './Content.css';
import { menuItems } from '../../common/menu';

export default function Content() {
  return (
    <Routes>
      {menuItems.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}