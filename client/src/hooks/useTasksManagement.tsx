import { useState } from "react"
import { addTask } from "../api/taskAPI"

export interface Task {
    title: string,
    description: string,
    createdAt: string
}

interface UseTasksManagementProps {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    handleAddTask: (task: Task) => Promise<void>
}

const useTasksManagement = (initialTasks: Task[] = []): UseTasksManagementProps => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)

    const handleAddTask = async(task: Task): Promise<void> => {
        try {
            const newTask = await addTask(task)
            setTasks((prevTasks) => [...prevTasks, newTask])
        } catch (err) {
            console.error('Error adding task: ', err)
        }
    }

    return {
        tasks,
        setTasks,
        handleAddTask
    }
}

export default useTasksManagement