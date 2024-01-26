const {body}= require('express-validator')

module.exports =[
    body("nombre").notEmpty().withMessage('Completar el campo').bail().isLength({min:3}),
    body("email").notEmpty().withMessage('Completar el campo').bail(),
    body("edad").notEmpty().withMessage('Completar el campo').bail()
]
