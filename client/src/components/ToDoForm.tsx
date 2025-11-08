import { X } from "lucide-react"
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
            status: 'Incomplete'
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
            <form onSubmit={handleSubmit} className='flex flex-col bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative'>
                <X onClick={handleCloseToDoForm} className='absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer' />
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Task</h2>
                <label htmlFor='formTitle' className='text-sm font-medium text-gray-700 mb-1'>Task title</label>
                <input 
                    id='formTitle'
                    type='text'
                    value={title}
                    onChange={handleTitleChange}
                    required
                    className='mb-4 p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-sky-300 outline-none'
                />
                <label htmlFor='formDescription' className='text-sm font-medium text-gray-700 mb-1'>Task description</label>
                <input 
                    id='formDescription'
                    type='text'
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                    className='mb-4 p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-sky-300 outline-none'
                />
                <label htmlFor='formStatus' className='text-sm font-medium text-gray-700 mb-1'>Status</label>
                <input 
                    id='formStatus'
                    type='text'
                    value='Incomplete'
                    readOnly
                    required
                    className='mb-4 p-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-sky-300 outline-none'
                />
                <button 
                    type='submit'
                    className='bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg transition-colors duration-200'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ToDoForm
