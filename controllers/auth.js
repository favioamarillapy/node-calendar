const { sendSuccess } = require('../utils/Response');

const get = (req, res) => {

    res.json({ a: 'anpm' })
};

const signup = (req, res) => {

    const { name, email, password } = req.body;

    return sendSuccess(res, 'User registered successfull', req.body);
};

const signin = (req, res) => {

    const { name, email, password } = req.body;

    return sendSuccess(res, 'User registered successfull', req.body);
};

const renew = (req, res) => {

    res.json({ a: 'anpm' })
};



module.exports = { get, signup, signin, renew };