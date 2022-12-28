const express = require('express');
const { signup, signIn } = require('../controllers/auth');
const router = express.Router();

// validators
const { runValidation } = require('../validators');
const { userSignupValidator, userSignInValidator } = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSignInValidator, runValidation, signIn);

module.exports = router;
