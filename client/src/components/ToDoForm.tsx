import { X } from "lucide-react"
import type { FormEvent, ChangeEvent } from "react"
import { useState } from "react"
import type { Task } from "../hooks/useTasks"

interface ToDoFormProps {
    handleCloseToDoForm: () => void
    handleAddTask: (task: Task) => Promise<void>
}

const ToDoForm = ({ handleCloseToDoForm, handleAddTask }: ToDoFormProps) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTask: Task = {
            title,
            description,
            status: "Incomplete"
        }
        await handleAddTask(newTask)
        handleCloseToDoForm()
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center animate-fadeIn">
            <form
                onSubmit={handleSubmit}
                className="relative bg-white p-8 rounded-xl shadow-xl w-full max-w-lg border border-gray-200 animate-scaleIn"
            >
                {/* Close button */}
                <button
                    onClick={handleCloseToDoForm}
                    type="button"
                    className="absolute top-5 right-5 text-gray-500 hover:text-red-500 transition"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Add New Task
                </h2>

                {/* Title */}
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="formTitle">
                    Task Title
                </label>
                <input
                    id="formTitle"
                    type="text"
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    required
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-sky-300 outline-none"
                />

                {/* Description */}
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="formDescription">
                    Task Description
                </label>
                <input
                    id="formDescription"
                    type="text"
                    value={description}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    required
                    className="w-full mb-4 p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-sky-300 outline-none"
                />

                {/* Status (readonly) */}
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="formStatus">
                    Status
                </label>
                <input
                    id="formStatus"
                    type="text"
                    value="Incomplete"
                    readOnly
                    className="w-full mb-6 p-3 border border-gray-200 bg-gray-100 rounded-lg text-gray-600 cursor-not-allowed"
                />

                {/* Buttons */}
                <div className="flex justify-between gap-4">
                    <button
                        type="button"
                        onClick={handleCloseToDoForm}
                        className="w-1/2 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="w-1/2 py-2 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm
