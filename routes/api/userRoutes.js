const router = require('express').Router();
const {
  createUser,
  getUsers,
  addFriend,
  addThought,
  getSingleUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:userId/thoughts/:thoughtId').post(addThought);

module.exports = router;
