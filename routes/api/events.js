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
var debug = require('debug')('here-and-now:server');

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
        owner: req.body.owner,
        attendees:req.body.attendees,
        comments: req.body.comments,
        eventTime: req.body.eventTime
      });

      let event = await newEvent.save();
      return res.json(event);
    }
    catch(err) {
      debug(err)
      next(err);
    }
  }
)

router.patch('/:id',
validateEventInput,
async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id)
   
    if (event){
      event.title = req.body.title || event.title;
      event.description = req.body.description || event.description;
      event.address = req.body.address || event.address;
      event.lat = req.body.lat || event.lat;
      event.lng = req.body.lng || event.lng;
      event.owner = req.body.owner || event.owner;
      event.attendees =  req.body.attendees || event.attendees;
      event.eventTime = req.body.eventTime || event.eventTime;
      event.comments = req.body.comments || event.comments;
    }
    await Event.findByIdAndUpdate(req.params.id, event)
    return res.json(event);
  }
  catch(err) {
    next(err);
  }
}
)

module.exports = router;

// Example Users
// "6328af2a622ab8b31b2ae063": {
//                    "_id": "6328af2a622ab8b31b2ae063",
//                    "firstName":"Zoltan",
//                    "lastName": "Master Z",
//                    "email": "Zol@tan.io",
//                    "birthDay" :"2022-09-19T18:04:03.000+00:00"
//                   }

// "632903a7f8c092514deb41c4": {
//                    "_id": "632903a7f8c092514deb41c4",
//                    "firstName":"Test",
//                    "lastName": "User",
//                    "email": "test@user.io",
//                    "birthDay" :"2022-09-19T18:04:03.000+00:00"
//                   }



// {
//   "title": "Test Event 1",
//    "description": "Party at Jaybles House",
//    "address": "516 Ellis, apt 408",
//     "lat": 121,
//    "lng": 200,
//    "owner": { "6328af2a622ab8b31b2ae063": {
//                  "_id": "6328af2a622ab8b31b2ae063",
//                  "firstName":"Zoltan",
//                  "lastName": "Master Z",
//                  "email": "Zol@tan.io",
//                  "birthDay" :"2022-09-19T18:04:03.000+00:00"

//                 }
//              },
//    "attendees":{
//                     "6328af2a622ab8b31b2ae063": {
//                       "_id": "6328af2a622ab8b31b2ae063",
//                       "firstName":"Zoltan",
//                       "lastName": "Master Z",
//                       "email": "Zol@tan.io",
//                       "birthDay" :"2022-09-19T18:04:03.000+00:00"
//                     },

//                     "632903a7f8c092514deb41c4": {
//                       "_id": "632903a7f8c092514deb41c4",
//                       "firstName":"Test",
//                       "lastName": "User",
//                       "email": "test@user.io",
//                       "birthDay" :"2022-09-19T18:04:03.000+00:00"
//                      }
//                  },
//    "comments": { "632a03073bd585a192c642a8" : { "_id ": "632a03073bd585a192c642a8",
//                                                  "body": "Zoltan is the BESTTTTTTT",
//                                                  "commenter" : {
//                                                                       "_id": "6328af2a622ab8b31b2ae063",
//                                                                       "firstName":"Zoltan",
//                                                                       "lastName": "Master Z",
//                                                                       "email": "Zol@tan.io",
//                                                                       "birthDay" :"2022-09-19T18:04:03.000+00:00"
//                                                                     }
//                                                      }

//                  },
//    "eventTime": "2018-05-12T08:00:00.000Z"
// }
  


// _id
// 632a03073bd585a192c642a8
// body
// "updatedcomment"
// commenterId
// "6328af2a622ab8b31b2ae063"


// {
//     "title": "Test Event 1",
//      "description": "Party at Jaybles House",
     
// "_id" : "632a2fb8498f5b25cc662d67"
// }