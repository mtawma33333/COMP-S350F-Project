const express = require('express');
const courseController = require('../controllers/courseController')
const authController = require('./../controllers/authController')

const router = express.Router();

router.route('/')
  .get(
    authController.protect, 
    courseController.getAllCourse)
  .post(
    authController.protect, 
    courseController.createCourse)

router.route('/:id')
  .get(
    authController.protect, 
    courseController.getCourse)
  .patch(
    authController.protect, 
    courseController.updateCourse)
  .delete(
    authController.protect, 
    authController.restricTo('admin'),
    courseController.deleteCourse)

module.exports = router;
