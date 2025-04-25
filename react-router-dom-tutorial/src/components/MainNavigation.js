// Importing NavLink component from react-router-dom
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          {/* NavLink Component for navigation */}
          {/* Highlights the active link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
