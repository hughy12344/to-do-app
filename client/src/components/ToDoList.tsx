import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"
import useTasksManagement from "../hooks/useTasksManagement.tsx"

const ToDoList = () => {
    const [showToDoForm, setShowToDoForm] = useState(false)

    const {tasks, setTasks, handleAddTask} = useTasksManagement()

    const handleOpenToDoForm = () => setShowToDoForm(true)
    const handleCloseToDoForm = () => setShowToDoForm(false)

    return(
        <div>
            {showToDoForm && (
                <ToDoForm
                    handleCloseToDoForm={handleCloseToDoForm}
                    handleAddTask={handleAddTask}
                />
            )}

            <h1>To-Do List</h1>
            <ToDoListUtilities handleOpenToDoForm={handleOpenToDoForm}/>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default ToDoList