import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import ValidationModal from "./ValidationModal";

export default function NewProject({setProjectMgmtState, onSaveProject}) {
    const [validation, setValidation] = useState();
    const projectNameRef = useRef();
    const projectDescriptionRef = useRef();
    const projectDueDateRef = useRef();

    function cancelButtonHandler () {
        console.log("Cancel button clicked");
        setProjectMgmtState((prevState) => ({
            ...prevState,
            selectedProject: undefined,
        }));
    };

    function saveButtonHandler () {
        console.log("Save button clicked");
        // Logic to save the project goes here
        console.log("Project Name:", projectNameRef.current.value);
        if(!projectNameRef.current.value) {
            setValidation("Project Name is required.");
            return;
        }
        console.log("Project Description:", projectDescriptionRef.current.value);
        if(!projectDescriptionRef.current.value) {
            setValidation("Project Description is required.");
            return;
        }
        console.log("Project Due Date:", projectDueDateRef.current.value);
        if(!projectDueDateRef.current.value) {
            setValidation("Project Due Date is required.");
            return;
        }
        // After saving, you might want to update the state or perform other actions
        onSaveProject({
            name: projectNameRef.current.value,
            description: projectDescriptionRef.current.value,
            dueDate: projectDueDateRef.current.value,
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the project
        });
    }

    function validationCloseHandler() {
        setValidation(null);
    }

    return (
        <div className="w-3/4 p-10 bg-white shadow-xl rounded-lg">
            {validation && <ValidationModal validationMessage={validation} onClose={validationCloseHandler}/>}
            <menu className="flex justify-end mb-8">
                <li className="mr-4">
                    <Button onClick={cancelButtonHandler} className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
                        Cancel
                    </Button>
                </li>
                <li>
                    <Button onClick={saveButtonHandler} className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                        Save
                    </Button>
                </li>
            </menu>
            <div className="space-y-8">
                <Input label="Project Name" ref={projectNameRef}/>
                <Input label="Description" isTextArea={true} ref={projectDescriptionRef}/>
                <Input label="Due Date" ref={projectDueDateRef}/>
            </div>
        </div>
    );
}