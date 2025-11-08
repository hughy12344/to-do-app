import { ListPlus, ListX, ListRestart } from 'lucide-react'

interface ToDoListUtilitiesProps {
    handleOpenToDoForm: () => void
    fetchTasks: () => void
    handleDeleteSelectedTask: () => void
    selectedTaskID: string | null
}

const ToDoListUtilities = ({handleOpenToDoForm, fetchTasks, handleDeleteSelectedTask, selectedTaskID}: ToDoListUtilitiesProps) => {
    return(
        <div className='flex bg-gray-100 justify-between rounded p-2 mb-5'>
            <ListPlus onClick={(handleOpenToDoForm)} className='text-gray-500 hover:text-black' />
            <ListRestart onClick={(fetchTasks)} className='text-gray-500 hover:text-black' />
            {selectedTaskID !== null && <div>
                <ListX onClick={(handleDeleteSelectedTask)} className='text-gray-500 hover:text-black' />
            </div>}
        </div>
    )
}

export default ToDoListUtilities