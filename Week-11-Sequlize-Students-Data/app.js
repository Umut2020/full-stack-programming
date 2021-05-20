import express from 'express'

// Middlewares
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

// Routers
import studentsRouter from './routes/students.js'

let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/students', studentsRouter)

app.listen(3000, () => {
  console.log('listening on 3000')
})
