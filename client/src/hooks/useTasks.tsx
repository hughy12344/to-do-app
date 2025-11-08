import { useState, useEffect } from "react"
import { addTask as apiAddTask, fetchTasks as apiFetchTasks, deleteTask as apiDeleteTask } from "../api/taskAPI"

export interface Task {
    _id?: string,
    title: string,
    description: string,
    createdAt?: Date,
    updatedAt?: Date
}

interface UseTasksManagementProps {
    tasks: Task[]
    isLoading: boolean
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    fetchTasks: () => void
    handleAddTask: (task: Task) => Promise<void>
    handleDeleteTask: (taskID: string) => void
}

const useTasks = (initialTasks: Task[] = []): UseTasksManagementProps => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTasks = async () => {
        setIsLoading(true);
        try {
            const data: Task[] = await apiFetchTasks();
            setTasks(data);
        } catch (err) {
            console.error("Error fetching tasks:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch tasks on mount
    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async(task: Task): Promise<void> => {
        try {
            const newTask = await apiAddTask(task)
            setTasks((prevTasks) => [...prevTasks, newTask])
        } catch (err) {
            console.error('Error adding task: ', err)
        }
    }

    const handleDeleteTask = async(taskID: string): Promise<void> => {
        try {
            await apiDeleteTask(taskID)
            setTasks((prevTasks) => prevTasks.filter(task => task._id !== taskID))
        } catch (err) {
            console.error('Error deleting task: ', err)
        }
    }

    return {
        tasks,
        setTasks,
        fetchTasks,
        isLoading,
        handleAddTask,
        handleDeleteTask
    }
}

export default useTasks