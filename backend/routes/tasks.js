// routes/tasks.js
import express from 'express'
import pool from '../db.js'

const router = express.Router()

// Get all tasks
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC')
  res.json(result.rows)
})

// Get one task
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  res.json(result.rows[0])
})

// Create a task
router.post('/', async (req, res) => {
  const { title, description } = req.body
  const result = await pool.query(
    'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  )
  res.json(result.rows[0])
})

// Update a task
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
    [title, description, id]
  )
  res.json(result.rows[0])
})

// Delete a task
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id])
  res.json({ message: 'Task deleted' })
})

export default router
