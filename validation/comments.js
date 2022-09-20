const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');

const validateCommentInput = [
    check('body')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 140 })
        .withMessage('Body must be between 5 and 140 characters'),
    handleValidationErrors
];

module.exports = validateCommentInput;