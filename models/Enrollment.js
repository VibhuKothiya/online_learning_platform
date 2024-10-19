const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  progress: [{
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
    completed: { type: Boolean, default: false }
  }],
}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
module.exports = Enrollment;
