const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateTweetInput is a combination Express middleware that uses the check
// middleware to validate the keys in the body of the request to create/edit
// a tweet
const validateEventInput = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 50 })
        .withMessage('Title must be between 5 and 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 150 })
        .withMessage('Description must be between 5 and 150 characters'),
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 60 })
        .withMessage('Address must be between 5 and 60 characters'),
    check('eventTime')
        .exists({ checkFalsy: true })
        // .isDate()
        .isISO8601()
        .withMessage('Event time must be a valid date and time'),    
    handleValidationErrors
];

module.exports = validateEventInput;



