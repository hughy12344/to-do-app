import { useState } from "react"
import ToDoListUtilities from "./ToDoListUtilities.tsx"
import ToDoForm from "./ToDoForm.tsx"

const ToDoList = () => {
    const [showToDoForm, setShowToDoForm] = useState(false)

    const handleOpenToDoForm = () => setShowToDoForm(true)
    const handleCloseToDoForm = () => setShowToDoForm(false)

    return(
        <div>
            {showToDoForm && (
                <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'>
                    <ToDoForm
                        handleCloseToDoForm={handleCloseToDoForm}
                    />
                </div>
            )}

            <h1>To-Do List</h1>
            <ToDoListUtilities handleOpenToDoForm={handleOpenToDoForm}/>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default ToDoList