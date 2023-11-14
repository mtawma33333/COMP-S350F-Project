const express = require('express');
const recordController = require('../controllers/recordController');
const authController = require('./../controllers/authController')

const router = express.Router();

router.route('/')
  .get(
    authController.protect, 
    recordController.getAllRecord)
  .post(
    authController.protect, 
    recordController.createRecord)

router.route('/:id')
  .get(
    authController.protect, 
    recordController.getRecord)
  .patch(
    authController.protect, 
    recordController.updateRecord)
  .delete(
    authController.protect, 
    authController.restricTo('admin'),
    recordController.deleteRecord)

module.exports = router; 