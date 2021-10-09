const bcrypt = require('bcryptjs');
const { sendSuccess, sendError } = require('../utils/Response');
const User = require('../models/User');
const { jwtGenerate } = require('../helpers/jwt');

const get = (req, res) => {

    res.json({ a: 'anpm' })
};

const signup = async (req, res) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email: email })

        if (user) {
            return sendError(res, 'An user already exist with email', email);
        }

        const persist = new User(req.body);

        const salt = bcrypt.genSaltSync();
        persist.password = bcrypt.hashSync(password, salt);

        await persist.save();

        const token = await jwtGenerate(persist._id, persist.name);

        return sendSuccess(res, 'User registered successfull', {
            name: persist.name,
            email: persist.email,
            password: persist.password,
            _id: persist._id,
            __v: persist.__v,
            token: token
        });

    } catch (error) {
        console.log(error);
        return sendError(res, 'User registered unsuccessfull', error);
    }
};

const signin = async (req, res) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email: email })

        if (!user) {
            return sendError(res, 'Access Denied', null);
        }

        const passwordValid = bcrypt.compare(password, user.password);

        if (passwordValid) {
            const token = await jwtGenerate(user._id, user.name);

            return sendSuccess(res, 'User logged successfull', {
                name: user.name,
                email: user.email,
                password: user.password,
                _id: user._id,
                __v: user.__v,
                token: token
            });
        }

        return sendError(res, 'Access Denied', null);


    } catch (error) {
        console.log(error);
        return sendError(res, 'User logged unsuccessfull', null);
    }
};

const renew = async (req, res) => {

    const { id, name } = req.body;

    let user = await User.findOne({ id: id })

    const token = await jwtGenerate(user._id, user.name);

    return sendSuccess(res, 'Token renew successfull', {
        name: user.name,
        email: user.email,
        password: user.password,
        _id: user._id,
        __v: user.__v,
        token: token
    });
}



module.exports = { get, signup, signin, renew };