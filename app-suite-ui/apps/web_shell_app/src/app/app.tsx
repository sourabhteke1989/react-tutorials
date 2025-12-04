import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';


const WebApp1 = React.lazy(() => import('web_app_1/Module'));


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/web-app-1">WebApp1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web_shell_app" />} />
        <Route path="/web-app-1/*" element={<WebApp1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
