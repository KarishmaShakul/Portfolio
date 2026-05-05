import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

// Message schema (inline — no separate file needed)
const messageSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true },
    email:   { type: String, required: true },
    subject: { type: String, default: '' },
    message: { type: String, required: true },
  },
  { timestamps: true }
)
const Message = mongoose.model('Message', messageSchema)

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required.' })
  }

  try {
    await Message.create({ name, email, subject, message })
    res.status(201).json({ message: 'Message received! I will get back to you soon.' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong. Please try again.' })
  }
})

export default router