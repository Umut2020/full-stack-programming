import express from 'express';
var router = express.Router();
import * as service from '../service/enrollment-service.js'

/* GET al enrollments listing. */
router.get('/', async function(req, res, next) {
  const allEnrollments = await service.getAllEnrollments();
  res.send(allEnrollments);
});

/** GET a enrollment by id */
router.get('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  const enrollment = await service.getEnrollmentById(enrollmentId)
  res.send(enrollment);
});

/** Add a new enrollment */
router.post('/', async function(req, res, next) {
  const newEnrollment = req.body; 
  const createdEnrollment = await service.createEnrollment(newEnrollment);
  res.status(201).send(createdEnrollment);
});

/** delete a enrollment by id */
router.delete('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  await service.deleteEnrollment(enrollmentId);
  res.status(200).send({});
});

export default router;


/** update a enrollment by id 
 
router.put('/:id', async function(req, res, next) {
  let enrollmentId = req.params.id;
  let enrollmentToBeUpdated = req.body;
  let updatedenrollment = await service.updateEnrollment(enrollmentId, enrollmentToBeUpdated);
  res.status(200).send(updatedEnrollment);
});

*/