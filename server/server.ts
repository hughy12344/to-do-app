import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables")
}
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))



const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))