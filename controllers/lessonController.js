const asyncHandler = require('express-async-handler');
const Lesson = require('../models/Lesson');

// @desc    Create new lesson
// @route   POST /api/lessons
// @access  Private/Admin
const createLesson = asyncHandler(async (req, res) => {
  const { courseId, title, content } = req.body;
  const lesson = new Lesson({ course: courseId, title, content });

  const createdLesson = await lesson.save();
  res.status(201).json(createdLesson);
});

// @desc    Get lessons by course
// @route   GET /api/lessons/:courseId
// @access  Public
const getLessonsByCourse = asyncHandler(async (req, res) => {
  const lessons = await Lesson.find({ course: req.params.courseId });
  res.json(lessons);
});

module.exports = {
  createLesson,
  getLessonsByCourse,
};
