const { body, validationResults } = require('express-validator')
const validator = require('../helpers/validate');

const createUser = (req, res, next) => {
    const validationRule = {
        email: 'required|email',
        username: 'required|string',
        name: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
        res.status(412).send({
            success: false,

            message: 'Validation failed',
            data: err
        });
    } else {
        next();
       }
    });
};



module.exports = { createUser }

// const userRules = () => {
//     return [
//         body('email').isEmail(),
//         body('username').isLength({min: 4}),
//         body('name').isAlpha(),
//     ]