const Course = require('../models/course');
const Lesson = require('../models/lesson');
const { Op } = require('sequelize');

exports.searchContent = async (req, res) => {
  const { query } = req.query;

  try {
    const courses = await Course.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { description: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    const lessons = await Lesson.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
    });

    res.json({ courses, lessons });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
