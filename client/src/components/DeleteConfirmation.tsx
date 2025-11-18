import type { Task } from "../hooks/useTasks.tsx"

interface DeleteConfirmationProps {
    handleDeleteSelectedTask: () => Promise<void>
    handleCloseDeleteConfirmation: () => void
    selectedTaskID: string | null
    tasks: Task[] | undefined
}

const DeleteConfirmation = ({
    handleDeleteSelectedTask,
    handleCloseDeleteConfirmation,
    selectedTaskID,
    tasks
}: DeleteConfirmationProps) => {

    const tasksCheck = tasks ?? []
    const selectedTask = tasksCheck.find(task => task._id === selectedTaskID)

    const handleSubmit = async () => {
        await handleDeleteSelectedTask()
        handleCloseDeleteConfirmation()
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center animate-fadeIn">
            <div className="relative bg-white p-8 rounded-xl shadow-xl w-full max-w-lg border border-gray-200 animate-scaleIn">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Delete Task
                </h2>

                {selectedTask ? (
                    <div className="mb-6">
                        <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 font-semibold text-gray-700">Title</th>
                                    <th className="px-4 py-2 font-semibold text-gray-700">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-3 text-gray-900">{selectedTask.title}</td>
                                    <td className="px-4 py-3 text-gray-600">{selectedTask.description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-red-500 font-medium mb-6 text-center">
                        Task not found
                    </p>
                )}

                <p className="text-gray-700 text-center mb-6">
                    Are you sure you want to delete this task?
                    <br />
                    <span className="text-red-500 font-semibold">This action cannot be undone.</span>
                </p>

                {/* Buttons */}
                <div className="flex justify-between gap-4">
                    <button
                        onClick={handleCloseDeleteConfirmation}
                        className="w-1/2 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="w-1/2 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmation