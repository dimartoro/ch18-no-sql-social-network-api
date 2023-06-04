const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  createUser,
  getUsers,
  createThought,
  addFriend,
  getSingleUser,
  deleteUser
} = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// router.route('/users').get(getUsers).post(createUser);

// router.route('/thoughts').post(createThought);

// router.route('/users/:userId').post(addFriend).get(getSingleUser).delete(deleteUser);

//router.route('/users/:userId').post(addThought);
// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
