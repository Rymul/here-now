const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/Comment')
const Comment = mongoose.model('Comment');
const validateCommentInput = require('../../validation/events');


router.get('/', async (_req, res) => {
    try {
      const comments = await Comment.find()
                                .populate()
                                .sort({ createdAt: -1 });
      return res.json(comments);
    }
    catch(_err) {
      return res.json([]);
    }
  })

  router.post('/',
  //   requireUser,
    // validateCommentInput,
    async (req, res, next) => {
      try {
        const newComment = new Comment({
          body: req.body.body,
          commenterId: req.body.commenterId
        });
  
        let comment = await newComment.save();
        return res.json(comment);
      }
      catch(err) {
        next(err);
      }
    }
  )

  router.delete('/:id', async (req,res,next) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id).populate();
        return res.json(comment)
    }
  
  catch(_err) {
    const err = new Error('Comment not found');
    err.statusCode = 404;
    err.errors = {message: "No event found with that id" };
    return next(err);
  }
})


router.patch('/:id', async (req,res,next) => {
    try {
        const comment = await Comment.findById(req.params.id)

        if (comment) {
            comment.body = req.body.body || comment.body;
            // comment.commenterId = req.body.commenterId || comment.commenterId;
        }
        await Comment.findByIdAndUpdate(req.params.id, comment)
        return res.json(comment)
    }
    catch(err) {
        next(err);
    }
}
)

module.exports = router;