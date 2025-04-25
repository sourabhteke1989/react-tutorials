import Button from "./Button";
import SideBarProjectSelector from "./SideBarProjectSelector";

export default function ProjectsSideBar({ onStartCreateProject, projects, selectedProjectId, selectProject, onDeleteProject }) {

    return (
        <div className="w-1/4 h-screen bg-gray-50 p-8 border-r border-gray-200 shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Projects</h2>
            <Button onClick={onStartCreateProject} className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                + New Project
            </Button>
            <div className="mt-6 space-y-4">
                {projects.map((project) => (
                    <SideBarProjectSelector 
                        key={project.id} 
                        project={project} 
                        selectedProjectId={selectedProjectId}
                        selectProject={selectProject} 
                        onDeleteProject={onDeleteProject} 
                    />
                ))}
            </div>
        </div>
    );
}