import { ListPlus, ListX, ListRestart } from 'lucide-react'

interface ToDoListUtilitiesProps {
    handleOpenToDoForm: () => void
}

const ToDoListUtilities = ({handleOpenToDoForm}: ToDoListUtilitiesProps) => {
    return(
        <div className='flex bg-gray-100 rounded p-2 mb-5'>
            <ListPlus onClick={(handleOpenToDoForm)} className='text-gray-500 hover:text-black' />
            <ListX className='text-gray-500 hover:text-black' />
            <ListRestart className='text-gray-500 hover:text-black' />
        </div>
    )
}

export default ToDoListUtilities