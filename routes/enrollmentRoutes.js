const express = require('express');
const { enrollCourse, getMyEnrollments, updateLessonProgress } = require('../controllers/enrollmentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, enrollCourse);
router.route('/my').get(protect, getMyEnrollments);
router.route('/:id/progress').put(protect, updateLessonProgress);

module.exports = router;
