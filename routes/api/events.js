const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { requireUser } = require('../../config/passport');
const validateEventInput = require('../../validation/events');

require('../../models/User')
const User = mongoose.model('User');
require('../../models/Events')
const Event = mongoose.model('Event');


// Get all of the events
router.get('/', async (_req, res) => {
  try {
    const events = await Event.find()
                              .populate()
                              .sort({ createdAt: -1 });
    return res.json(events);
  }
  catch(_err) {
    return res.json([]);
  }
})

// get all of the events from a specified user
router.get('/user/:userId', async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
  } catch(_err) {
    const err = new Error('User not found');
    err.statusCode = 404;
    err.errors = { message: "No user found with that id" };
    return next(err);
  }
  try {
    const events = await Event.find({ ownerId: user._id })
                              .sort({ createdAt: -1 })
                              .populate();
    return res.json(events);
  }
  catch(_err) {
    return res.json([]);
  }
})


// get a specific event
router.get('/:id', async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id)
                            //  .populate();
    return res.json(event);
  }
  catch(_err) {
    const err = new Error('Event not found');
    err.statusCode = 404;
    err.errors = { message: "No event found with that id" };
    return next(err);
  }
})


// delete a specific event
router.delete('/:id', async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id)
                             .populate();
    return res.json(event);
  }
  catch(_err) {
    const err = new Error('Event not found');
    err.statusCode = 404;
    err.errors = { message: "No event found with that id" };
    return next(err);
  }
})


// Attach requireUser as a middleware before the route handler to gain access
  // to req.user (will return error response if no current user)
// Attach validateTweetInput as a middleware before the route handler

// Create an event
router.post('/',
//   requireUser,
  validateEventInput,
  async (req, res, next) => {
    try {
      const newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng,
        ownerId: req.body.ownerId,
        attendees: [],
        eventTime: req.body.eventTime
      });

      let event = await newEvent.save();
    //   tweet = await tweet.populate('author', '_id, username');
      return res.json(event);
    }
    catch(err) {
      next(err);
    }
  }
)

var debug = require('debug')('here-and-now:server');


router.patch('/:id',
  // requireUser,
async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id)
   
    if (event){
      event.title = req.body.title || event.title;
      event.description = req.body.description || event.description;
      event.address = req.body.address || event.address;
      event.lat = req.body.lat || event.lat;
      event.lng = req.body.lng || event.lng;
      event.ownerId = req.body.ownerId || event.ownerId;
      event.attendees =  req.body.attendees || event.attendees;
      event.eventTime = req.body.eventTime || event.eventTime;
    }
 
    return res.json(event);
  }
  catch(err) {
    next(err);
  }
}
)

module.exports = router;

// {
//     "title": "test event",
//     "description": "req.body.description",
//     "address": "req.body.address",
//     "lat": 121,
//     "lng": 1212,
//    "eventTime": "2018-05-12 08:00:00+00:00"
// }