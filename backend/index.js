// index.js (or index.mjs)
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import taskRoutes from './routes/tasks.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api/tasks', taskRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})