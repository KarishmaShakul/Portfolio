import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import projectRoutes from './routes/projects.js'
import contactRoutes from './routes/contact.js'





dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API running' })
})

app.use('/api/projects', projectRoutes)
app.use('/api/contact', contactRoutes)
app.listen(5000, () => console.log('Server on port 5000'))
