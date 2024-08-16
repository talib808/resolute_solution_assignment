const sequelize = require('../config/db');
const Course = require('./course');
const Lesson = require('./lesson');

Course.hasMany(Lesson, { foreignKey: 'courseId' });
Lesson.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = {
  sequelize,
  Course,
  Lesson,
};
