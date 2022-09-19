const express = require('express');
const router = express.Router();

/* GET events listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/events"
  });
});



module.exports = router;
