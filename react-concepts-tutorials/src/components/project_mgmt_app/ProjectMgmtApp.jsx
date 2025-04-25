import { useState } from "react";
import NewProject from "./NewProject";
import NoProjectsSelected from "./NoProjectsSelected";
import ProjectsSideBar from "./ProjectsSideBar";
import ProjectDetails from "./ProjectDetails";

export default function ProjectMgmtApp() {
    const [projectMgmtState, setProjectMgmtState] = useState({
        selectedProject : undefined,
        projects : []
    });

    function handleStartNewProject() {
        console.log("Starting new project...");
        setProjectMgmtState({
            ...projectMgmtState,
            selectedProject : null
        });
    }

    function handleSaveProject(project) {
        console.log("Saving project...", project);
        setProjectMgmtState({
            ...projectMgmtState,
            projects : [...projectMgmtState.projects, project],
            selectedProject : project
        });
    }

    function handleSelectProject(project) {
        console.log("Selecting project:", project);
        setProjectMgmtState({
            ...projectMgmtState,
            selectedProject : project
        });
    }

    function handleDeleteProject(projectId) {
        console.log("Deleting project with ID:", projectId);
        setProjectMgmtState({
            ...projectMgmtState,
            projects: projectMgmtState.projects.filter(project => project.id !== projectId),
            selectedProject: undefined
        });
    }

    console.log("Project Management State:", projectMgmtState);

    let content = <NoProjectsSelected onStartCreateProject={handleStartNewProject}/>;
    let selectedProjectId;
    if(projectMgmtState.selectedProject === null) {
        content = <NewProject setProjectMgmtState={setProjectMgmtState} onSaveProject={handleSaveProject} />; 
    } else if(projectMgmtState.selectedProject) {   
        content = <ProjectDetails project={projectMgmtState.selectedProject} onDeleteProject={handleDeleteProject} />;
        selectedProjectId = projectMgmtState.selectedProject.id;
        console.log("Selected Project ID:", selectedProjectId);
    }

    return (
        <div className="flex">
            <ProjectsSideBar 
                onStartCreateProject={handleStartNewProject} 
                projects={projectMgmtState.projects}
                selectedProjectId={selectedProjectId} 
                selectProject={handleSelectProject} 
                onDeleteProject={handleDeleteProject} 
            />
            {content}
        </div>
    );
}