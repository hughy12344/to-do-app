import type { Task } from "../hooks/useTasks"

// Adds new task record to the backend database
export const addTask = async (task: Task): Promise<Task> => {
  try {
      const response = await fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task),
        credentials: 'include'
      })
      return await response.json()
  } catch (err) {
      throw err
  }
}

export const fetchTasks = async () => {
  try {
      const response = await fetch('http://localhost:8080/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      return await response.json()
  } catch (err) {
      throw err
  }
}