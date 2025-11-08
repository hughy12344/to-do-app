import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"
import useTasks from "../hooks/useTasks.tsx"

const ToDoList = () => {
    const [showToDoForm, setShowToDoForm] = useState<boolean>(false)
    const [selectedTaskID, setSelectedTaskID] = useState<string | null>(null)

    const {tasks, isLoading, fetchTasks, handleAddTask , handleDeleteTask} = useTasks()

    const handleOpenToDoForm = () => setShowToDoForm(true)
    const handleCloseToDoForm = () => setShowToDoForm(false)

    // Set new ID as selected task, if the same task is selected again, revert back to null
    const handleSelectTask = (taskID: string) => {
        setSelectedTaskID(prev => (prev === taskID ? null : taskID))
    }

    const handleDeleteSelectedTask = async () => {
        if (!selectedTaskID) return
        await handleDeleteTask(selectedTaskID)
        setSelectedTaskID(null)
    }

    return(
        <div>
            {showToDoForm && (
                <ToDoForm
                    handleCloseToDoForm={handleCloseToDoForm}
                    handleAddTask={handleAddTask}
                />
            )}

            <h1>To-Do List</h1>
            <ToDoListUtilities handleOpenToDoForm={handleOpenToDoForm} fetchTasks={fetchTasks} handleDeleteSelectedTask={handleDeleteSelectedTask} selectedTaskID={selectedTaskID}/>
            {isLoading ? (
                <div className='flex justify-center'>
                    <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
            ) : (
            <div>
                <table className='w-full text-left'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task._id}>
                        <td>
                            <input 
                                type='radio'
                                name='taskSelect'
                                checked={selectedTaskID === task._id}
                                onClick={() => { if (task._id) handleSelectTask(task._id)}}
                                readOnly
                                className='relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 
                                before:rounded-full before:bg-white not-checked:before:hidden checked:border-sky-500 checked:bg-sky-500 
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                                disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
                            />
                        </td>
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