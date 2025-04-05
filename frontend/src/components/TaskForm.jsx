// src/components/TaskForm.jsx
import React, { useState } from 'react'
import axios from 'axios'
import './TaskForm.css' // Import the CSS for TaskForm

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:5000/api/tasks', { title, description })
      setTitle('')
      setDescription('')
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  return (
    <div className="task-form-container">
      <h2 className="task-form-title">Add Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-textarea"
        ></textarea>
        <button type="submit" className="task-submit-btn">Add Task</button>
      </form>
    </div>
  )
}

export default TaskForm
