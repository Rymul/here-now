const { validationResult } = require("express-validator");

// handleValidationErrors is an Express middleware used with the check
// middleware to format the validation errors (to customize, see
// express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errorFormatter = ({ msg }) => msg;
    const errors = validationErrors.formatWith(errorFormatter).mapped();

    const err = Error("Bad request");
    err.errors = errors;
    err.statusCode = 400;
    err.title = "Bad request";
    next(err);
  }
  next();
};

module.exports = handleValidationErrors;