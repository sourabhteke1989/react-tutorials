import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';


const WebApp1 = React.lazy(() => import('web_app_1/Module'));


export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-indigo-600">AppSuite</h1>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/web-app-1"
                    className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  >
                    WebApp1
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<NxWelcome title="web_shell_app" />} />
            <Route path="/web-app-1/*" element={<WebApp1 />} />
          </Routes>
        </main>
      </div>
    </React.Suspense>
  );
}

export default App;
