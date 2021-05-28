import express from 'express';
var router = express.Router();
import * as service from '../service/lecture-service.js'

/* GET al lectures listing. */
router.get('/', async function(req, res, next) {
  const alllectures = await service.getAllLectures();
  res.send(allLectures);
});

/** GET a lecture by id */
router.get('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  const lecture = await service.getLectureById(lectureId)
  res.send(lecture);
});

/** Add a new lecture */
router.post('/', async function(req, res, next) {
  const newLecture = req.body; 
  const createdLecture = await service.createLecture(newLecture);
  res.status(201).send(createdLecture);
});

/** delete a lecture by id */
router.delete('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  await service.deleteLecture(lectureId);
  res.status(200).send({});
});

export default router;


/** update a lecture by id 
 
router.put('/:id', async function(req, res, next) {
  let lectureId = req.params.id;
  let lectureToBeUpdated = req.body;
  let updatedLecture = await service.updateLecture(lectureId, lectureToBeUpdated);
  res.status(200).send(updatedLecture);
});

*/