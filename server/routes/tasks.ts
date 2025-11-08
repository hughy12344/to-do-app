import express from 'express'
import Task from '../models/task'

const router = express.Router()

// Getting all
router.get('/', async (req, res) => {
  try {
        const tasks = await Task.find()
        res.json(tasks)
  } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Failed to fetch tasks', error: err })
  }
})

// Creating one
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body

        const task = new Task({
            title,
            description
        })

        const newTask = await task.save()
        res.status(201).json(newTask)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: 'Failed to create task', error: err })
    }
})

// Deleting one
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        
        const deletedTask = await Task.findByIdAndDelete(id)

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found " })
        }

        res.status(200).json({ message: "Task deleted successfully ", deletedTask})
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error deleting task "})
    }
})

export default router