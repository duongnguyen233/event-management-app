// src/components/TaskList.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TaskList.css' // import CSS file

function TaskList() {
  const [tasks, setTasks] = useState([])

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => {
        setTasks(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the tasks:', error)
      })
  }, [])

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Task List</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <h3 className="task-name">{task.name}</h3>
            <p className="task-description">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
