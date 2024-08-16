// const Course = require('../models/course');
// const Lesson = require('../models/lesson');
const { Course, Lesson } = require('../models');

// const redis = require('redis');
// const client = redis.createClient();

// exports.getCourses = async (req, res) => {
//   client.get('courses', async (err, courses) => {
//     if (courses) {
//       res.json(JSON.parse(courses));
//     } else {
//       try {
//         const courses = await Course.findAll({ include: [Lesson] });
//         client.setex('courses', 3600, JSON.stringify(courses)); // Cache for 1 hour
//         res.json(courses);
//       } catch (err) {
//         res.status(400).json({ error: err.message });
//       }
//     }
//   });
// };



exports.createCourse = async (req, res) => {
  const { title, description, lessons } = req.body;

  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    
    const course = await Course.create({ title, description });

  
    if (lessons && lessons.length > 0) {
      const lessonPromises = lessons.map(lesson => 
        Lesson.create({ ...lesson, courseId: course.id })
      );
      await Promise.all(lessonPromises);
    }

  
    const createdCourse = await Course.findByPk(course.id, { include: Lesson });
    res.status(201).json(createdCourse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({ include: [Lesson] });
    res.json(courses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    await course.update(req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    await course.destroy();
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
