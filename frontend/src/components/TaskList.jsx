// src/components/TaskList.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
