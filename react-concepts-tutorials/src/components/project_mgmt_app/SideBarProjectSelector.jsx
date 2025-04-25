import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default function SideBarProjectSelector({ project, selectProject, selectedProjectId, onDeleteProject }) {
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    let selectedProject = false;
    if(project.id === selectedProjectId) {
        selectedProject = true
    }

    function showDeleteModal() {
        setDeleteModalVisible(true);
    }

    function hideDeleteModal() {
        setDeleteModalVisible(false);
    }

    function handleDeleteConfirmed() {
        onDeleteProject(project.id);
        hideDeleteModal();
    }

    return (
        <div
            key={project.id}
            className={`p-4 shadow-md rounded-lg flex justify-between items-center ${
                selectedProject ? "bg-blue-100 border border-blue-500" : "bg-white"
            }`}
        >
            <button
                onClick={() => {
                    console.log("Project clicked:", project); // Debugging log
                    selectProject(project);
                }}
                className="flex-1 text-left cursor-pointer"
            >
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the selectProject handler
                    showDeleteModal();
                }}
                className="text-red-600 hover:text-red-800"
                title="Delete Project"
            >
                &#x2716; {/* Unicode for a cross icon */}
            </button>
            {isDeleteModalVisible && (
                <ConfirmDeleteModal
                    onConfirm={handleDeleteConfirmed}
                    onCancel={hideDeleteModal}
                />
            )}
        </div>
    );
}