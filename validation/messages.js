const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

// validateTweetInput is a combination Express middleware that uses the check
// middleware to validate the keys in the body of the request to create/edit
// a tweet
const validateMessageInput = [
    check('author')
        .exists({ checkFalsy: true })
        .withMessage('Message must have author'),
    check('recipient')
        .exists({ checkFalsy: true })
        .withMessage('Message must have recipient'),
    check('body')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 1000 })
        .withMessage('Message must be between 2 and 1000 characters'),
    handleValidationErrors
];

module.exports = validateMessageInput;