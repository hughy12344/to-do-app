import { ListPlus, ListX, ListRestart, ListFilter } from 'lucide-react'

// Props for toolbar utilities
interface ToDoListUtilitiesProps {
    handleOpenToDoForm: () => void
    fetchTasks: () => void
    handleDeleteSelectedTask: () => void
    selectedTaskID: string | null
    statusFilter: string
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>
}

// Toolbar component for managing task list actions and filters
const ToDoListUtilities = ({handleOpenToDoForm, fetchTasks, handleDeleteSelectedTask, selectedTaskID, statusFilter, setStatusFilter}: ToDoListUtilitiesProps) => {
    return(
        <div className="flex gap-4 mb-5 bg-gray-50 p-3 rounded-xl shadow-sm">
            {/* Add new task */}
            <ListPlus
                onClick={(handleOpenToDoForm)} 
                className="w-6 h-6 text-gray-500 hover:text-sky-500 cursor-pointer transition-colors" 
            />

            {/* Refresh task list */}
            <ListRestart 
                onClick={(fetchTasks)} 
                className="w-6 h-6 text-gray-500 hover:text-sky-500 cursor-pointer transition-colors" 
            />

            {/* Delete selected task (only shown if one is selected) */}
            {selectedTaskID !== null && <div>
                <ListX 
                    onClick={(handleDeleteSelectedTask)} 
                    className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" 
                />
            </div>}

            {/* Status filter dropdown */}
            <div className="flex ml-auto gap-2">
                <ListFilter className="w-6 h-6 text-gray-500" />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border rounded-md px-2 py-1"
                >
                    <option value="All">All</option>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
            </div>
        </div>
    )
}

export default ToDoListUtilities