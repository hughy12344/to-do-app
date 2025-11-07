import type { Task } from "../hooks/useTasksManagement"

//Backend URL path
const apiBase = import.meta.env.VITE_API_URL;

// Adds new task record to the backend database
export const addTask = async (task: Task): Promise<Task> => {
  try {
    const response = await fetch(`${apiBase}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task),
      credentials: 'include'
    })
    return await response.json()
  } catch (err) {
    console.error('Error adding exercise: ', err)
    throw err
  }
}