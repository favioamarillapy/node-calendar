const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/field-validator');
const { get, signup, signin, renew } = require('../controllers/auth');


router.get('/', get);

router.post(
    '/signup',
    [
        check('name', 'The field name is required').not().isEmpty(),
        check('email', 'The field email is required').not().isEmpty(),
        check('email', 'Wrong email field format').isEmail(),
        check('password', 'The field password is required').not().isEmpty(),
        check('password', 'The password field must have a minimum of 6 characters').isLength({ min: 6 }),
        fieldValidator
    ],
    signup);

router.post(
    '/signin',
    [
        check('email', 'The field email is required').not().isEmpty(),
        check('email', 'Wrong email field format').isEmail(),
        check('password', 'The field password is required').not().isEmpty(),
        check('password', 'The password field must have a minimum of 6 characters').isLength({ min: 6 }),
        fieldValidator
    ],
    signin);

router.post('/renew', renew);




module.exports = router