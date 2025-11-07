import { useState, useEffect } from "react"
import { addTask as apiAddTask, fetchTasks as apiFetchTasks } from "../api/taskAPI"

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
    handleAddTask: (task: Task) => Promise<void>
}

const useTasksManagement = (initialTasks: Task[] = []): UseTasksManagementProps => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Fetch tasks on mount
    useEffect(() => {
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

    return {
        tasks,
        setTasks,
        isLoading,
        handleAddTask
    }
}

export default useTasksManagement