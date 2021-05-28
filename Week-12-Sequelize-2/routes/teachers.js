import express from 'express';
var router = express.Router();
import * as service from '../service/teacher-service.js'

/* GET al Teachers listing. */
router.get('/', async function(req, res, next) {
  const allTeachers = await service.getAllTeachers();
  res.send(allTeachers);
});

/** GET a teacher by id */
router.get('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  const teacher = await service.getTeacherById(teacherId)
  res.send(teacher);
});

/** Add a new teacher */
router.post('/', async function(req, res, next) {
  const newTeacher = req.body; 
  const createdTeacher = await service.createTeacher(newTeacher);
  res.status(201).send(createdTeacher);
});

/** delete a teacher by id */
router.delete('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  await service.deleteTeacher(teacherId);
  res.status(200).send({});
});

export default router;


/** update a teacher by id 
 
router.put('/:id', async function(req, res, next) {
  let teacherId = req.params.id;
  let teacherToBeUpdated = req.body;
  let updatedTeacher = await service.updateTeacher(teacherId, teacherToBeUpdated);
  res.status(200).send(updatedTeacher);
});

*/