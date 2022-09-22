const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const passport = require('passport');
const { loginUser, restoreUser } = require('../../config/passport');
const validateRegisterInput = require('../../validation/register.js');
const validateLoginInput = require('../../validation/login.js');
const validateMessageInput = require('../../validation/messages.js');
const AWS = require('aws-sdk');



require('../../models/Message');
const Message = mongoose.model('Message');

require('../../models/User')

const User = mongoose.model('User');
const { isProduction } = require('../../config/keys');

//testing AWS setup
const creds = new AWS.Credentials(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY_ID)
const S3 = new AWS.S3();
router.get('/s3', async() => await(S3.putObject({
  Body: "hello world",
  Bucket: "here-and-now-s3",
  Key: "my-file.txt",

}).promise() ))

//

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
      .select('firstName')
      .select('lastName')
      .select('email')
      .select('events')
      .select('birthDay')
    return res.json(users);
  }
  catch(err) {
    return res.json([]);
  }
});


/* GET current user */
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
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    events: req.user.events,
    birthday: req.user.birthday
  });
})


/* GET user ex user show */
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
      .select('firstName')
      .select('lastName')
      .select('email')
      .select('events')
      .select('birthDay')
      .select('createdAt')
    return res.json(user);
  }
  catch(_err) {
    const err = new Error('Event not found');
    err.statusCode = 404;
    err.errors = { message: "No event found with that id" };
    return next(err);
  }
});



/* POST Signup user */
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



/* PATCH update user */
router.patch('/:userId', validateRegisterInput, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
  
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.birthDay = req.body.birthDay || user.birthDay;
      user.events = req.body.events || user.events;
    }
    if (req.body.password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
          if (err) throw err;
          try {
            user.hashedPassword = hashedPassword;
            const updatedUser = await user.save();
            // return res.json(await loginUser(updatedUser));
          }
          catch(err) {
            next(err);
          }
        })
      });
    }
    return res.json(user);

  }
  catch(err) {
    next(err)
  }
});



/* POST login user */
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



/*DELETE current user */
router.delete('/:userId', async (req, res) => {
  User
  .findByIdAndRemove(req.params.userId)
  .exec()
  .then(data => {
    if (!data) {return res.status(404).end(); }
    return res.status(204).end();
  })
  .catch(err => next(err))
});





// GET all messaged to or from userId
router.get('/messages/:userId', async (req, res) => {
  try{
    const messages = await Message.find(
      { $or: [
        { authorId: req.params.userId }, 
        { recipientId: req.params.userId }
        ]
      }
    );
    return res.json(messages);
  }
  catch(err) {
    return res.json([]);
  }
   
});

//POST a message by author to recipient
router.post('/messages', validateMessageInput,
  async (req, res, next) => {
    try {
      const newMessage = new Message({
        body: req.body.body,
        author: req.body.author,
        recipient: req.body.recipient,
        seen: false
      });

      let message = await newMessage.save();
      return res.json(message);
    }
    catch (err) {
      next(err);
    }
  }
)





module.exports = router;


// {
// "firstName": "Demo"
// "lastName": "User"
// "email": "demo@user.io"
// "birthDay": "2022-09-19T18:04:03.000+00:00"
// }