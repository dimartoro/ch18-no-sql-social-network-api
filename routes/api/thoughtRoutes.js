const router = require('express').Router();
const {
  // createUser,
  // getUsers,
  // createThought,
  // addFriend,
  getSingleThought,
  deleteThought,
  updateThought,
  getThoughts,
  createThought
} = require('../../controllers/thoughtController.js');

// /api/users
router.route('/').get(getThoughts).post(createThought);

//router.route('/thoughts').post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// router.route('/:userId/friends/:friendId').post(addFriend);

//router.route('/users/:userId').post(addThought);
// /api/courses/:courseId

module.exports = router;
