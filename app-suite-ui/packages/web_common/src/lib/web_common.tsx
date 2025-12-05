import { common } from '@app_suite/common';

export function AppSuiteWebCommon({str}: {str: string}) {

  const commonMessage = common();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to AppSuiteWebCommon!</h1>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-900">Message from App1 Module:</span>
                <span className="ml-2 text-blue-800 font-mono">[{str}]</span>
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
              <p className="text-gray-700">
                <span className="font-semibold text-indigo-900">Message from Common Package:</span>
                <span className="ml-2 text-indigo-800 font-mono">[{commonMessage}]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSuiteWebCommon;
