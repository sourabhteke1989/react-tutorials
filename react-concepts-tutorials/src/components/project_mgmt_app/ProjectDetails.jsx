import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';

export default function ProjectDetails({ project, onDeleteProject }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        onDeleteProject(project.id);
        setIsModalOpen(false);
    };

    return (
        <div className="w-3/4 p-10 bg-white shadow-xl rounded-lg">
            <div className="space-y-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <p className="mt-1 text-lg text-gray-900">{project.name}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <p className="mt-1 text-lg text-gray-900">{project.description}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                    <p className="mt-1 text-lg text-gray-900">{project.dueDate}</p>
                </div>
                <button
                    onClick={handleDeleteClick}
                    className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                    Delete Project
                </button>
            </div>
            {isModalOpen && (
                <ConfirmDeleteModal
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}