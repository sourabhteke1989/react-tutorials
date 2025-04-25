// Importing Outlet component from react-router-dom
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

function RootLayout() {
  return (
    <div>
      {/* MainNavigation component for navigation links */}
      <MainNavigation />
      {/* Outlet component to render child route elements */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
