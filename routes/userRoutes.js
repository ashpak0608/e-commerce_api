const express = require('express');
const router = express.Router();
const { signup, login, updateProfile, changePassword, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.put('/profile', protect, updateProfile);
router.put('/change-password', protect, changePassword);
router.get('/', protect, getAllUsers);

module.exports = router;
