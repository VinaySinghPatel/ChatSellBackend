const express = require('express');
const Chat = require('../modelschema/ChatBotSchema')
const { body, validationResult } = require('express-validator');
const router = express.Router();


router.post('/savchat', async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({Success, errors: errors.array() });
    }
    try {
        const { userId, message } = req.body;
        const chat = new Chat({ userId, message });
        await chat.save();
        res.status(201).json(chat);
    } catch (error) {
        console.log(error);
    }
});

router.get('/getallchathistory/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const chats = await Chat.find({ userId });
  
      res.status(200).json(chats );
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });


module.exports = router;