const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
