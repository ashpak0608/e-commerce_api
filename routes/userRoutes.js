const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const { signupSchema, loginSchema, updateProfileSchema, changePasswordSchema } = require('../validations/userValidation');

router.post('/signup', validate(signupSchema), userController.signup);
router.post('/login', validate(loginSchema), userController.login);
router.put('/profile', protect, validate(updateProfileSchema), userController.updateProfile);
router.put('/change-password', protect, validate(changePasswordSchema), userController.changePassword);
router.get('/', protect, userController.getAllUsers);

module.exports = router;
