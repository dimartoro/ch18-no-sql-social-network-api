const router = require('express').Router();
const {
  // createUser,
  // getUsers,
  removeReaction,
  addReaction,
  getSingleThought,
  deleteThought,
  updateThought,
  getThoughts,
  createThought
} = require('../../controllers/thoughtController.js');
const { remove } = require('../../models/Assignment.js');

// /api/users
router.route('/').get(getThoughts).post(createThought);

//router.route('/thoughts').post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
