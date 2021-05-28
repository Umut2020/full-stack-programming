import express from 'express';
var router = express.Router();
import * as service from '../service/student-service.js'

/* GET al students listing. */
router.get('/', async function(req, res, next) {
  const allStudents = await service.getAllStudents();
  res.send(allStudents);
});

/** Add a new student */
router.post('/', async function(req, res, next) {
  const newStudent = req.body; 
  const createdStudent = await service.createStudent(newStudent);
  res.status(201).send(createdStudent);
});


export default router;