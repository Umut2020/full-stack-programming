import express from 'express'
const router = express.Router()
import * as service from '../service/rent-service.js'

/* GET rents listing. */
router.get('/', function (req, res, next) {
  let allRents = service.getAllRents()
  res.send(allRents)
})

/** Add a new rent */
router.post('/:id/rent', function (req, res, next) {
  let movieId = req.params.id
  service.createMovieRent(movieId, req.body)
  res.status(200)
})

export default router
