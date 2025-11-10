import express from 'express'
import Task from '../models/task'

const router = express.Router()

// Getting all tasks
router.get('/', async (req, res) => {
  try {
        const tasks = await Task.find()
        res.json(tasks)
  } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Failed to fetch tasks', error: err })
  }
})

// Creating one task
router.post('/', async (req, res) => {
    try {
        const { title, description, status } = req.body

        const task = new Task({
            title,
            description,
            status
        })

        const newTask = await task.save()
        res.status(201).json(newTask)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: 'Failed to create task', error: err })
    }
})

// Deleting one task
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
        res.status(500).json({ message: "Server error deleting task", error: err})
    }
})

// Patching one task
router.patch('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {status} = req.body

        if (!status) {
            return res.status(404).json({ message: "Missing status field in request body" })
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id, { status }, { new: true, runValidators: true }
        )

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" })
        }
    } catch (err) {
        res.status(500).json({ message: "Server error updating status", error: err })
    }
})

export default router