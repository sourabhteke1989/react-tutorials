import Button from "./Button";

export default function NoProjectsSelected({onStartCreateProject}) {
    return (
        <div className="w-3/4 p-10 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">No Projects Selected</h2>
            <p className="text-lg text-gray-700 mb-8">Please select a project from the sidebar.</p>
            <Button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onClick={onStartCreateProject}
            >
                + New Project
            </Button>
        </div>
    );
}