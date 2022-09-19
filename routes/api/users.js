const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

require('../../models/User')

const User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/users"
  });
});

// POST /api/users/register
router.post('/register', async (req, res, next) => {
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
        return res.json({ user });
      }
      catch(err) {
        next(err);
      }
    })
  });
});

module.exports = router;
