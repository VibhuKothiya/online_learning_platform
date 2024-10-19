const express = require('express');
const { createLesson, getLessonsByCourse } = require('../controllers/lessonController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, admin, createLesson);
router.route('/:courseId').get(getLessonsByCourse);

module.exports = router;
