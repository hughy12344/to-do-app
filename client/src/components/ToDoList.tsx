import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"
import DeleteConfirmation from "./DeleteConfirmation.tsx"
import type { Task } from "../hooks/useTasks.tsx"

// Props for ToDoList component
interface ToDoListProps {
    tasks: Task[]
    isLoading: boolean
    fetchTasks: () => void
    handleAddTask: (task: Task) => Promise<void>
    handleDeleteTask: (taskID: string) => Promise<void>
    handleUpdateStatus: (taskID: string, newStatus: string) => Promise<void>
}

// Main to-do list component (handles displays, filters and CRUD triggers)
const ToDoList = ({tasks, isLoading, fetchTasks, handleAddTask, handleDeleteTask, handleUpdateStatus}: ToDoListProps) => {
    // Modal visibility state for Add Task form
    const [showToDoForm, setShowToDoForm] = useState<boolean>(false)
    
    // Modal visibility state for Delete Confirmation
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false)

    // Tracks currently selected task (for deletion)
    const [selectedTaskID, setSelectedTaskID] = useState<string | null>(null)

    // Controls filtering of table based on status
    const [statusFilter, setStatusFilter] = useState<string>("All")

    const handleOpenToDoForm = () => setShowToDoForm(true)
    const handleCloseToDoForm = () => setShowToDoForm(false)
    
    const handleOpenDeleteConfirmation = () => setShowDeleteConfirmation(true)
    const handleCloseDeleteConfirmation = () => setShowDeleteConfirmation(false)

    // Toggle selected task. Clicking again deselects it
    const handleSelectTask = (taskID: string) => {
        setSelectedTaskID(prev => (prev === taskID ? null : taskID))
    }

    // Deletes currently selected task (if any)
    const handleDeleteSelectedTask = async () => {
        if (!selectedTaskID) return
        await handleDeleteTask(selectedTaskID)
        setSelectedTaskID(null)
    }

    // Filter tasks based on current status selection
    const filteredTasks = tasks.filter(task => 
        statusFilter === "All" ? true : task.status === statusFilter
    )

    return(
        <div className="p-6">
            {/* Show task creation form as modal */}
            {showToDoForm && (
                <ToDoForm
                    handleCloseToDoForm={handleCloseToDoForm}
                    handleAddTask={handleAddTask}
                />
            )}

            {/* Show task deletion confirmation as modal */}
            {showDeleteConfirmation && (
                <DeleteConfirmation 
                    handleDeleteSelectedTask={handleDeleteSelectedTask}
                    handleCloseDeleteConfirmation={handleCloseDeleteConfirmation}
                    selectedTaskID={selectedTaskID}
                    tasks={tasks}
                />
            )}

            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

            {/* Utility bar for adding, deleting, refreshing and filtering */}
            <ToDoListUtilities 
                handleOpenToDoForm={handleOpenToDoForm} 
                fetchTasks={fetchTasks} 
                handleOpenDeleteConfirmation={handleOpenDeleteConfirmation}
                selectedTaskID={selectedTaskID}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
            />

            {/* Loading spinner when fetching tasks via API */}
            {isLoading ? (
                <div className='flex justify-center py-10'>
                    <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
            ) : (
            <div className="max-h-70 overflow-y-auto rounded-lg shadow-md">
                <table className='w-full text-left border-collapse'>
                    <thead className='bg-gray-100 sticky top-0 z-20'>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Task</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                <tbody>
                {filteredTasks.map(task => (
                    <tr key={task._id} 
                    className={`border-b hover:bg-gray-50 ${
                        selectedTaskID === task._id ? "bg-gray-100" : ""
                  }`}>
                        {/* Radio buttons for selecting a task */}
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
                        {/* Task details */}
                        <td className="px-4 py-2">{task._id}</td>
                        <td className="px-4 py-2">{task.title}</td>
                        <td className="px-4 py-2">{task.description}</td>

                        {/* Status dropdown (updates immediately on change) */}
                        <td className="px-4 py-2">
                            <select
                                value={task.status}
                                onChange={async (e: React.ChangeEvent<HTMLSelectElement>) => {
                                    if (task._id) await handleUpdateStatus(task._id, e.target.value)
                                }}
                                className={`border rounded-md px-2 py-1 text-sm cursor-pointer ${
                                task.status === "Complete"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                            >
                                <option value="Incomplete">Incomplete</option>
                                <option value="Complete">Complete</option>
                            </select>
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