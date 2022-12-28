const express = require('express');
const { signup, signIn, signout, requireSignIn } = require('../controllers/auth');
const router = express.Router();

// validators
const { runValidation } = require('../validators');
const { userSignupValidator, userSignInValidator } = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSignInValidator, runValidation, signIn);
router.get('/signout', signout);

// test
router.get('/secret', requireSignIn, (req, res) => {
  res.json({
    message: 'You have access to secret page',
  });
});

module.exports = router;
