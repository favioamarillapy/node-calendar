const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/field-validator');
const { get, find, create, update, remove } = require('../controllers/event');
const { tokenValidator } = require('../middlewares/token-validator');
const { isDate } = require('../helpers/isDate');


router.get('/', tokenValidator, get);
router.get('/:id', tokenValidator, find);

router.post('/',
    [
        tokenValidator,
        check('title', 'The field title is required').not().isEmpty(),
        check('start', 'The field start date is required').custom(isDate),
        check('end', 'The field end date is required').custom(isDate),
        fieldValidator
    ],
    create);

router.put('/:id',
    [
        tokenValidator,
        check('title', 'The field title is required').not().isEmpty(),
        check('start', 'The field start date is required').custom(isDate),
        check('end', 'The field end date is required').custom(isDate),
        fieldValidator
    ],
    update);

router.delete('/:id', tokenValidator, remove);





module.exports = router