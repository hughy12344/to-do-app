import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"
import type { Task } from "../hooks/useTasks.tsx"

interface ToDoListProps {
    tasks: Task[]
    isLoading: boolean
    fetchTasks: () => void
    handleAddTask: (task: Task) => Promise<void>
    handleDeleteTask: (taskID: string) => void
}

const ToDoList = ({tasks, isLoading, fetchTasks, handleAddTask, handleDeleteTask}: ToDoListProps) => {
    const [showToDoForm, setShowToDoForm] = useState<boolean>(false)
    const [selectedTaskID, setSelectedTaskID] = useState<string | null>(null)

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
        <div className="p-6">
            {showToDoForm && (
                <ToDoForm
                    handleCloseToDoForm={handleCloseToDoForm}
                    handleAddTask={handleAddTask}
                />
            )}

            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

            <ToDoListUtilities 
                handleOpenToDoForm={handleOpenToDoForm} 
                fetchTasks={fetchTasks} 
                handleDeleteSelectedTask={handleDeleteSelectedTask} 
                selectedTaskID={selectedTaskID}
            />

            {isLoading ? (
                <div className='flex justify-center py-10'>
                    <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
            ) : (
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className='w-full text-left border-collapse'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Task</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                <tbody>
                {tasks.map(task => (
                    <tr key={task._id} 
                    className={`border-b hover:bg-gray-50 ${
                        selectedTaskID === task._id ? "bg-gray-100" : ""
                  }`}>
                        <td className="px-4 py-2">
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
                        <td className="px-4 py-2">{task._id}</td>
                        <td className="px-4 py-2">{task.title}</td>
                        <td className="px-4 py-2">{task.description}</td>
                        <td className="px-4 py-2">
                            <span
                                className={`px-2 py-1 rounded-full text-sm font-semibold ${
                                    task.status === "Complete" ? "bg-emerald-200 text-emerald-800" : "bg-red-200 text-red-800"
                                }`}
                            >  
                                {task.status}
                            </span>
                        </td>
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