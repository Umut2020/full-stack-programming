import express from 'express'

// Middlewares
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

// Routers
import moviesRouter from './routes/movies.js'
import rentsRouter from './routes/rents.js'

let app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/movies', moviesRouter)
app.use('/rents', rentsRouter)

app.listen(3000, () => {
  console.log('listening on 3000')
})
