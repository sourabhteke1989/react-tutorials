// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { app1ModuleFeature } from '@app_suite/app1_module';
import NxWelcome from './nx-welcome';
import { AppSuiteWebCommon } from '@app_suite/web_common';

export function App() {
  const str = app1ModuleFeature();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Web App 1</h2>
          <p className="text-gray-600">Integrated component showcase</p>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
              <h3 className="text-lg font-semibold text-white">AppSuite Web Common Component</h3>
            </div>
            <div className="p-6">
              <AppSuiteWebCommon str={str} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-4">
              <h3 className="text-lg font-semibold text-white">Welcome Section</h3>
            </div>
            <div className="p-6">
              <NxWelcome title="web_app_1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
