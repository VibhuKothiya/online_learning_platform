const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

// @desc    Create new course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const course = new Course({ title, description, instructor: req.user._id });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id).populate('instructor', 'name');
  
    if (course) {
      res.json(course);
    } else {
      res.status(404);
      throw new Error('Course not found');
    }
  });

  
const updateCourse = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const course = await Course.findById(req.params.id);
  
    if (course) {
      course.title = title;
      course.description = description;
  
      const updatedCourse = await course.save();
      res.json(updatedCourse);
    } else {
      res.status(404);
      throw new Error('Course not found');
    }
  });

  const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
  
    if (course) {
      await course.remove();
      res.json({ message: 'Course removed' });
    } else {
      res.status(404);
      throw new Error('Course not found');
    }
  });
  
  module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
  };