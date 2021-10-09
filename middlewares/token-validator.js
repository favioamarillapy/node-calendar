var jwt = require('jsonwebtoken');
const { sendError } = require('../utils/Response');

const tokenValidator = (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return sendError(res, 'Access denied', null);
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

        req.id = payload.id;
        req.name = payload.name;

    } catch (error) {
        return sendError(res, 'Token not valid', null);
    }

    next();

}

module.exports = { tokenValidator };