import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"
import useTasksManagement from "../hooks/useTasks.tsx"

const ToDoList = () => {
    const [showToDoForm, setShowToDoForm] = useState(false)

    const {tasks, isLoading, handleAddTask} = useTasksManagement()

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
            {isLoading ? (
                <div className='flex justify-center'>
                    <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
            ) : (
            <div>
                <table className='w-full text-left'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task._id}>
                        <td>{task._id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
            )}
        </div>
    )
}

export default ToDoList