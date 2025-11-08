import { SquareX } from "lucide-react"
import type { FormEvent, ChangeEvent } from "react"
import { useState } from "react"
import type { Task } from "../hooks/useTasks"

interface ToDoFormProps {
    handleCloseToDoForm: () => void
    handleAddTask: (task: Task) => Promise<void>
}

const ToDoForm = ({handleCloseToDoForm, handleAddTask}: ToDoFormProps) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask: Task = {
            title,
            description,
        }
        handleAddTask(newTask)
        handleCloseToDoForm()
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    return (
        <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col bg-white p-5 rounded-lg max-w-sm shadow-lg'>
                <SquareX onClick={handleCloseToDoForm} className='text-gray-500 hover:text-black ' />
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Add Task</h2>
                <label htmlFor='formTitle' className='block text-sm font-medium text-gray-900'>Task title</label>
                <input 
                    id='formTitle'
                    type='text'
                    value={title}
                    onChange={handleTitleChange}
                    required
                    className='block bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg w-full p-2 mb-5'
                />
                <label htmlFor='formDescription' className='block text-sm font-medium text-gray-900'>Task description</label>
                <input 
                    id='formDescription'
                    type='text'
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                    className='block bg-gray-50 text-gray-900 text-sm border border-gray-300 rounded-lg w-full p-2 mb-5'
                />
                <button 
                    type='submit'
                    className='text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus-outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2 mb-3'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ToDoForm
