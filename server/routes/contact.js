const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const ContactMessage = require('../models/ContactMessage');

const contactValidation = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg, errors: errors.array() });
    }
    next();
};

router.post('/', contactValidation, checkValidation, async (req, res, next) => {
    try {
        const { name, email, service, message } = req.body;
        const contactMessage = await ContactMessage.create({ name, email, service, message });
        res.status(201).json({ message: 'Enquiry received', id: contactMessage._id });
    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const messages = await ContactMessage.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
