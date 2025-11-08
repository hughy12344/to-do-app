import { ListPlus, ListX, ListRestart } from 'lucide-react'

interface ToDoListUtilitiesProps {
    handleOpenToDoForm: () => void
    fetchTasks: () => void
    handleDeleteSelectedTask: () => void
    selectedTaskID: string | null
}

const ToDoListUtilities = ({handleOpenToDoForm, fetchTasks, handleDeleteSelectedTask, selectedTaskID}: ToDoListUtilitiesProps) => {
    return(
        <div className="flex gap-4 mb-5 bg-gray-50 p-3 rounded-xl shadow-sm">
            <ListPlus onClick={(handleOpenToDoForm)} className="w-6 h-6 text-gray-500 hover:text-sky-500 cursor-pointer transition-colors" />
            <ListRestart onClick={(fetchTasks)} className="w-6 h-6 text-gray-500 hover:text-sky-500 cursor-pointer transition-colors" />
            {selectedTaskID !== null && <div>
                <ListX onClick={(handleDeleteSelectedTask)} className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" />
            </div>}
        </div>
    )
}

export default ToDoListUtilities