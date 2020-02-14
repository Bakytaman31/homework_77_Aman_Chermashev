const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, config.uploadPath),
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const messages = await fileDb.getMessages();
    res.send(messages);
});


router.post('/', upload.single('image'), async (req, res) => {
    const message = req.body;

    if (req.file) {
        message.image = req.file.filename;
    }

    if (message.author === '') {
        message.author = 'Anonymous';
    }

    await fileDb.addMessage(message);
    res.send(req.body.id);
});

module.exports = router;