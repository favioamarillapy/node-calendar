const { validationResult } = require('express-validator');
const { sendError } = require('../utils/Response');

const fieldValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendError(res, 'Valitations error', errors.mapped());
    }

    next();
}

module.exports = { fieldValidator }