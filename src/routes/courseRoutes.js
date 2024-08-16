const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/courses', authenticateToken, createCourse);
router.get('/courses', authenticateToken, getCourses);
router.put('/courses/:id', authenticateToken, updateCourse);
router.delete('/courses/:id', authenticateToken, deleteCourse);

module.exports = router;
