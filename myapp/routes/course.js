const express = require('express');
const courseController = require('../controllers/courseController')
const authController = require('./../controllers/authController')
const recordRouter = require('./record')

const router = express.Router();
// Protect all routes after this middleware
router.use(authController.protect);


router.use('/:courseId/record', recordRouter)


router.route('/')
  .get(
    courseController.getAllCourse)
  .post(
    authController.restrictTo('admin'),
    courseController.createCourse)

router.route('/:id')
  .get(
    courseController.getCourse)
  .patch(
    authController.restrictTo('admin'),
    courseController.updateCourse)
  .delete(
    authController.restrictTo('admin'),
    courseController.deleteCourse)

module.exports = router;
