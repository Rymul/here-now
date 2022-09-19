const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const { loginUser, restoreUser } = require('../../config/passport');
const validateRegisterInput = require('../../validation/register.js');
const validateLoginInput = require('../../validation/login.js');

require('../../models/User')

const User = mongoose.model('User');
const { isProduction } = require('../../config/keys');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/users"
  });
});


router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    // In development, allow React server to gain access to the CSRF token
    // whenever the current user information is first loaded into the
    // React application
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  // console.log(req.user)

  if (!req.user) return res.json(null);
  res.json({
    _id: req.user._id,
    // firstName: req.user.firstName,
    email: req.user.email
  });
})





// POST /api/users/register
router.post('/register', validateRegisterInput, async (req, res, next) => {
  // Check to make sure nobody has already registered with a duplicate email
  // or username
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // Throw a 400 error if the email address and/or email already exists
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    err.errors = errors;
    return next(err);
  }
  // Otherwise create a new user
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDay: req.body.birthDay,
    email: req.body.email,
    events: []
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });
});



router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});



module.exports = router;