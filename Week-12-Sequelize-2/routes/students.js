import express from 'express';
var router = express.Router();
import * as service from '../service/student-service.js'

/* GET al students listing. */
router.get('/', async function(req, res, next) {
  const allStudents = await service.getAllStudents();
  res.send(allStudents);
});

/** GET a student by id */
router.get('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  const student = await service.getStudentById(studentId)
  res.send(student);
});

/** Add a new student */
router.post('/', async function(req, res, next) {
  const newStudent = req.body; 
  const createdStudent = await service.createStudent(newStudent);
  res.status(201).send(createdStudent);
});

/** delete a student by id */
router.delete('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  await service.deleteStudent(studentId);
  res.status(200).send({});
});

export default router;


/** update a student by id 
 
router.put('/:id', async function(req, res, next) {
  let studentId = req.params.id;
  let studentToBeUpdated = req.body;
  let updatedStudent = await service.updateStudent(studentId, studentToBeUpdated);
  res.status(200).send(updatedStudent);
});

*/