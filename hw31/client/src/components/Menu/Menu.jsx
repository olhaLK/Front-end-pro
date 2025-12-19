import { useSelector, useDispatch } from 'react-redux';
import { menuItems } from '../../common/menu';
import './Menu.css';
import { Link } from 'react-router-dom';
import { logout } from '../../store/features/auth';



export default function Menu() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <nav>
      <ul>
        {menuItems.map(item => {
          if (item.hideInMenu) return null;
          if (item.protected && !isAuthenticated) return null;
          if (item.path === '/auth' && isAuthenticated) return null;

          return (
             <li key={item.path}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
          )
        })}

        {isAuthenticated && (
          <li key="user-name" className="user-item">
            <span>{user?.login}</span>
            <button type="button" onClick={() => dispatch(logout())}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  )
}