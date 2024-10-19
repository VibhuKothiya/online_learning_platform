const asyncHandler = require('express-async-handler');
const Enrollment = require('../models/Enrollment');

// @desc    Enroll in a course
// @route   POST /api/enrollments
// @access  Private
const enrollCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.body;
  const enrollment = new Enrollment({
    user: req.user._id,
    course: courseId,
    progress: []
  });

  const createdEnrollment = await enrollment.save();
  res.status(201).json(createdEnrollment);
});

// @desc    Get user's enrollments
// @route   GET /api/enrollments/my
// @access  Private
const getMyEnrollments = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
  res.json(enrollments);
});

// @desc    Update lesson progress
// @route   PUT /api/enrollments/:id/progress
// @access  Private
const updateLessonProgress = asyncHandler(async (req, res) => {
  const { lessonId, completed } = req.body;
  const enrollment = await Enrollment.findById(req.params.id);

  if (enrollment) {
    const progressIndex = enrollment.progress.findIndex(progress => progress.lesson.toString() === lessonId);
    if (progressIndex > -1) {
      enrollment.progress[progressIndex].completed = completed;
    } else {
      enrollment.progress.push({ lesson: lessonId, completed });
    }

    const updatedEnrollment = await enrollment.save();
    res.json(updatedEnrollment);
  } else {
    res.status(404);
    throw new Error('Enrollment not found');
  }
});

module.exports = {
  enrollCourse,
  getMyEnrollments,
  updateLessonProgress,
};
