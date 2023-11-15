const express = require('express');
const recordController = require('../controllers/recordController');
const authController = require('./../controllers/authController')

const router = express.Router({ mergeParams: true });

router.use(authController.protect);
router.use(authController.restrictTo('admin', 'teacher'));

router.route('/')
  .get(
    recordController.getAllRecord)
  .post(
    recordController.createRecord)

router.route('/:id')
  .get(
    recordController.getRecord)
  .patch(
    recordController.updateRecord)
  .delete(
    recordController.deleteRecord)

module.exports = router; 